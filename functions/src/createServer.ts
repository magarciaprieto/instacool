/* eslint-disable import/no-anonymous-default-export */
import * as express from 'express';
import * as admin from 'firebase-admin';

interface IRequest extends express.Request {
  user: {
    uid: string
    email: string
    role: string
  }
}

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
})

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true})
const auth = admin.auth();

export default () => {
  //Definimos primero un middleware de autenticación, donde tenga que pasar una autenticación para determinar si es un usuario normal o un admin. Esto agrega seguridad a la app.
  //El "next" significa que una vez que se haya ejecutado esta función, siga con la siguiente.
  const app = express();
  app.use( async (req, res, next) => {
    const token: any = req.headers.authorization //Para poder utilizar "req" en toda esta pág, podemos agregarle una propiedad a "req" y así queda
    //disponible fuera de esta función.
    try {
      const { uid, email } = await auth.verifyIdToken(token)
      const snap = await db.collection('users').doc(uid).get()
      const user = snap.data() // Snap es solo una referencia a un objeto, hay q poblar un objeto con su data
      Object.assign(req, {
        user: {
          ...user,
          uid,
          email,
        }
      })
      next()
    } catch (e) {
      res.status(403).send('Authorization error');
    }
  })

  app.get('/posts/:postId/like', async (req: IRequest, res: any) => {
    const { uid } = req.user
    const { postId } = req.params
    const snaps = await db.collection('likes')
      .where('userId', '==', uid)
      .where('postId', '==', postId)
      .limit(1)
      .get()
    const result: { id?: string } = {}
    snaps.forEach(x => Object.assign(result, { ...x.data(), id: x.id}))
    if (result.id) {
      await db.collection('likes').doc(result.id).delete()
    }
    if (!result.id) {
      await db.collection('likes').doc().set({
        userId: uid,
        postId,
        createdAt: new Date(),
      })
    }
    res.sendStatus(204)
  })

  return app
}
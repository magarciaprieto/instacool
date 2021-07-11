import { AnyAction, Dispatch } from "redux";
import firebase from 'firebase'
import { IServices } from "../services";
import { download } from '../utils'

const START = 'posts/fetch-start';
const SUCCESS = 'posts/fetch-success';
const ERROR = 'posts/fetch-error';
const ADD = 'posts/add'

export interface IPost {
    comment: string
    userId: string
    createdAt: firebase.firestore.Timestamp
    imageURL: string
  }

export interface IDataPosts {
  [key: string]: IPost
}

const fetchStart = () => ({
  type: START,
})
const fetchSuccess = (payload: IDataPosts) => ({
  payload,
  type: SUCCESS,
})
const fetchError = (error: Error) => ({
  error,
  type: ERROR,
})
const add = (payload: IDataPosts) => ({
  payload,
  type: ADD,
})

const initialState = {
  data: {},
  fetched: false,
  fetching: false,
}

export default function reducer( state = initialState, action: AnyAction) {
  switch (action.type) {
    case START:
      return {
        ...state,
        fetching: true,
      }
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetched: true,
        fetching: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false,
      }
    case ADD:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        }
      }
    default:
      return state
  }
}

export const fetchPosts = () =>
  async (dispatch: Dispatch, getState: () => any, { db, storage } : IServices ) => {
    dispatch(fetchStart())
    try {
      //Fetch data from posts collection and store them in a "posts" object
      const snaps = await db.collection('posts').get();
      const posts: any = {};
      snaps.forEach( x => posts[x.id] = x.data());

      //Fetch URL from posts collection using posts ID/keys
      const imgIds = await Promise.all(Object.keys(posts).map(async x => {
        const ref = storage.ref(`posts/${x}.jpg`) //Returns a refernce for the given path, its not the url.
        const url = await ref.getDownloadURL() //Now we get the URL using .getDownloadURL method of Firebase.
        return [x, url] // [ID, URL]
      }))

      const keyedImages: any = {}
      imgIds.forEach( x => keyedImages[x[0]] = x[1])
      //Add imageURL property to posts
      Object.keys(posts).forEach( x => posts[x] = {
        ...posts[x],
        imageURL: keyedImages[x]
      })
      dispatch(fetchSuccess(posts));
    } catch(e) {
      console.log(e)
      dispatch(fetchError(e))
    }
  }

  export const like = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
      if(!auth.currentUser){
        return
      }
      const token = await auth.currentUser.getIdToken()
      await fetch(`/api/posts/${id}/like`, {
        headers: {
          authorization: token
        }
      })
    }

  export const share = (id: string) =>
  async (dispatch: Dispatch, getState: () => any, { auth, db, storage }: IServices) => {
    if(!auth.currentUser){
      return
    }
    const token = await auth.currentUser.getIdToken()
    const result = await fetch(`/api/posts/${id}/share`, {
      headers: {
        authorization: token
      }
    })
    const url = await storage.ref(`posts/${id}.jpg`).getDownloadURL()
    const blob: any = await download(url)
    const { id: postId }: { id: string} = await result.json()
    const ref = storage.ref(`posts/${postId}.jpg`)
    await ref.put(blob)
    const imageURL = await ref.getDownloadURL()
    const snap = await db.collection('posts').doc(postId).get()
    dispatch(add({ [snap.id]: {
      ...snap.data(),
      imageURL,
    } } as IDataPosts))

  }
 
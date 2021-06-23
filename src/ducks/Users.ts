import { Dispatch } from "redux";
import { IServices } from '../services';
import { db } from "../services/firebase";

export interface ILogin {
  email: string
  password: string
}

export default function reducer(state = {}) {
    return state;
}

export const login = ({ email, password }: ILogin) =>
  async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
    await auth.signInWithEmailAndPassword(email, password);
  }

export const register = ({ email, password }: ILogin) => 
  async (dispatch: Dispatch, getState: () => any, { auth, db }: IServices) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const { user } = userCredential
    const id = user ? user.uid : undefined
    const doc = db.collection('users').doc(id)
    await doc.set({ role: 'user' })
  };
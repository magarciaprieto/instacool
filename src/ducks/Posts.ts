import { AnyAction, Dispatch } from "redux";
import firebase from 'firebase'
import { IServices } from "../services";

const START = 'posts/fetch-start';
const SUCCESS = 'posts/fetch-success';
const ERROR = 'posts/fetch-error';

interface IData {
  [key: string]: {
    comment: string
    userId: string
    createdAt: firebase.firestore.Timestamp
  }
}

const fetchStart = () => ({
  type: START,
})
const fetchSuccess = (payload: IData) => ({
  payload,
  type: SUCCESS,
})
const fetchError = (error: Error) => ({
  error,
  type: ERROR,
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
    default:
      return state
  }
}

export const fetchPosts = () =>
  async (dispatch: Dispatch, getState: () => any, { db } : IServices ) => {
    dispatch(fetchStart())
    try {
      const snaps = await db.collection('posts').get();
      const posts: any = {};
      snaps.forEach( x => posts[x.id] = x.data());
      dispatch(fetchSuccess(posts));
    } catch(e) {
      console.log(e)
      dispatch(fetchError(e))
    }
  }
 
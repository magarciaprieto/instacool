import { AnyAction, Dispatch } from "redux";
import firebase from 'firebase'
import { IServices } from "../services";

const START = 'posts/fetch-start';
const SUCCESS = 'posts/fetch-success';
const ERROR = 'posts/fetch-error';

export interface IDataPosts {
  [key: string]: {
    comment: string
    userId: string
    createdAt: firebase.firestore.Timestamp
    imageURL: string
  }
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
    async (dispatch: Dispatch, getState: () => any, { db }: IServices) => {
      console.log(id)
      await fetch('/api/posts');
    }

  export const share = (id: string) =>
    async (dispatch: Dispatch, getState: () => any, { db }: IServices) => {
      console.log(id)
    }
 
import _firebase  from 'firebase';
import * as firebase from './firebase';

const services = {
  ...firebase,
};

export interface IServices {
  db: _firebase.firestore.Firestore
  storage: _firebase.storage.Storage
  auth: _firebase.auth.Auth
}
export default services
import __firebase  from 'firebase';
import * as firebase from './firebase';

const services = {
  ...firebase,
};

export interface IServices {
  db: __firebase.firestore.Firestore
  storage: __firebase.storage.Storage
  auth: __firebase.auth.Auth
}
export default services
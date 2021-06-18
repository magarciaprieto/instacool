import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAhWMVwJY7WEUVE5yabz-Nz4UuYNq4t2ys",
    authDomain: "instacool-435c8.firebaseapp.com",
    projectId: "instacool-435c8",
    storageBucket: "instacool-435c8.appspot.com",
    messagingSenderId: "601192151617",
    appId: "1:601192151617:web:a1c432a628ba8ee04de4c0",
    measurementId: "G-2PZ7CXH04E"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
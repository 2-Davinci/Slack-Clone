// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyChNA92oZ16xiazOrF5F-1dGqNHkDYmXKM",
  authDomain: "slack-clone-9cc2a.firebaseapp.com",
  projectId: "slack-clone-9cc2a",
  storageBucket: "slack-clone-9cc2a.appspot.com",
  messagingSenderId: "572485523118",
  appId: "1:572485523118:web:11d4f7024f350d21367f3f",
  measurementId: "G-BCX43D45NH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

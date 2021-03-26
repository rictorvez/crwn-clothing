import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMhSoEMkwH5WPsMM7XS5aK1BrIWp-o0fc",
    authDomain: "crwn-db-2d9ce.firebaseapp.com",
    projectId: "crwn-db-2d9ce",
    storageBucket: "crwn-db-2d9ce.appspot.com",
    messagingSenderId: "157336089515",
    appId: "1:157336089515:web:3fb5c03c5b072ebc4358ee",
    measurementId: "G-GX1KESYNQV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
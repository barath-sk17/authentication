import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCNcchwBnNJsYBJooc01M8adkcF4JEZcwE",
  authDomain: "react-app-6754c.firebaseapp.com",
  projectId: "react-app-6754c",
  storageBucket: "react-app-6754c.appspot.com",
  messagingSenderId: "923527973315",
  appId: "1:923527973315:web:1dcf2ecaacd88fbb1e1576"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
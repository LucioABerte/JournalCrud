// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPaHTXD8OW2l3-i0o5FDUT2lwoOJVlfME",
  authDomain: "journal-f2a29.firebaseapp.com",
  projectId: "journal-f2a29",
  storageBucket: "journal-f2a29.appspot.com",
  messagingSenderId: "959843973535",
  appId: "1:959843973535:web:632e82649d86aab829a5aa",
  measurementId: "G-GPSL4GJ1PE"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
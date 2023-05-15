// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWoo4hfeb1AkDGbz-8VU5k94Xqf_ahNgY",
  authDomain: "journal-2745c.firebaseapp.com",
  projectId: "journal-2745c",
  storageBucket: "journal-2745c.appspot.com",
  messagingSenderId: "136471699529",
  appId: "1:136471699529:web:92024aae65da1a998e9f98"
};


// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );
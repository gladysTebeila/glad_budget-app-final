// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtqgkrpMaWG84MoV-qYmliNSjA-HueIFc",
  authDomain: "budget-app-99100.firebaseapp.com",
  projectId: "budget-app-99100",
  storageBucket: "budget-app-99100.appspot.com",
  messagingSenderId: "832984883350",
  appId: "1:832984883350:web:17f65108e9d6bd6e8a22b7",
  measurementId: "G-67NW9YV3BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};
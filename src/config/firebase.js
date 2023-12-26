// Import the functions you need from the SDKs you need
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLoyHJOLZEWzb5QwCSisnLWaOtR1Kajos",
  authDomain: "contact-app-6c052.firebaseapp.com",
  projectId: "contact-app-6c052",
  storageBucket: "contact-app-6c052.appspot.com",
  messagingSenderId: "81822364740",
  appId: "1:81822364740:web:87cc33dbd3b1d8257b3811"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
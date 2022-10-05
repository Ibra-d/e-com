// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhV9jQA6qeLEaHIeBbo0SS-KPJgxhfvfE",
  authDomain: "e-com-b9a31.firebaseapp.com",
  projectId: "e-com-b9a31",
  storageBucket: "e-com-b9a31.appspot.com",
  messagingSenderId: "1093997333110",
  appId: "1:1093997333110:web:4974c3145e056ff412ed57",
  measurementId: "G-VTSF2NSLES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
};

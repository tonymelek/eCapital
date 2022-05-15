// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4hPzDaHDcgCL6an5dB4-HXl1rpsCdXgA",
    authDomain: "ecapital-27fb7.firebaseapp.com",
    projectId: "ecapital-27fb7",
    storageBucket: "ecapital-27fb7.appspot.com",
    messagingSenderId: "206297216847",
    appId: "1:206297216847:web:65a1d8fc68771916f6373a",
    measurementId: "G-5RBNW28D81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
export const auth = getAuth();
export const authMethods = { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signOut };

// db Functions
export const db = getFirestore(app);
export const dbMethods = { collection, getDocs, getDoc, doc, setDoc }




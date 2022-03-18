// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1nvm8REyKHKwxnZhwpZn7PlxH8_PIg3U",
  authDomain: "real-estate-marketplace-c2a9a.firebaseapp.com",
  projectId: "real-estate-marketplace-c2a9a",
  storageBucket: "real-estate-marketplace-c2a9a.appspot.com",
  messagingSenderId: "583675884349",
  appId: "1:583675884349:web:5b681077703aee44ea8b54"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjsraDOkbXZ7CyGvx0YGm9VDZBU0_pmko",
  authDomain: "reels-app-764e1.firebaseapp.com",
  projectId: "reels-app-764e1",
  storageBucket: "reels-app-764e1.appspot.com",
  messagingSenderId: "600640606102",
  appId: "1:600640606102:web:9864d2cc9d8aa24b2697b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);
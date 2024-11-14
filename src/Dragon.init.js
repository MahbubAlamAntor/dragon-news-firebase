// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPuMk4Q1iFrFwASqH8m7cA9hq9yI4rnU",
  authDomain: "dragon-news-firebase-1bf4a.firebaseapp.com",
  projectId: "dragon-news-firebase-1bf4a",
  storageBucket: "dragon-news-firebase-1bf4a.firebasestorage.app",
  messagingSenderId: "322099094145",
  appId: "1:322099094145:web:f3a893cf16db58e1432380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
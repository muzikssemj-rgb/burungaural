// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7mrVoyMqC0jO_L-lc9F_WBtBSrfj79w",
  authDomain: "burungaural.firebaseapp.com",
  projectId: "burungaural",
  storageBucket: "burungaural.firebasestorage.app",
  messagingSenderId: "730377077353",
  appId: "1:730377077353:web:1a50862a439ca6931558f8",
  measurementId: "G-JRS7NZG7ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
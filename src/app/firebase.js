// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsi3zqlMcsXigNHGxoIeseG-NqdIwtFB0",
  authDomain: "petmatchpoint-4d9de.firebaseapp.com",
  projectId: "petmatchpoint-4d9de",
  storageBucket: "petmatchpoint-4d9de.appspot.com",
  messagingSenderId: "298616963371",
  appId: "1:298616963371:web:d71c311dde8eae17f8456e",
  measurementId: "G-TDH14HCCB9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Ensure getAuth is imported
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT8V5SatCjEDtMu2T46x3IgwkjZVLiY58",
  authDomain: "bizgrow1-f6576.firebaseapp.com",
  projectId: "bizgrow1-f6576",
  storageBucket: "bizgrow1-f6576.appspot.com",
  messagingSenderId: "143591951092",
  appId: "1:143591951092:web:7cb3c7bdcab187a7e56ca1",
  measurementId: "G-W4REH5GDFF"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
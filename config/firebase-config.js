// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhwQmYy5P6jBQ-7loZPv_ltT_wrnEAu30",
  authDomain: "emsp7-7d446.firebaseapp.com",
  projectId: "emsp7-7d446",
  storageBucket: "emsp7-7d446.firebasestorage.app",
  messagingSenderId: "334092528705",
  appId: "1:334092528705:web:3cfa3e9136d5fddc362ac0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//we are connecting our application to database
export const db = getFirestore(app)

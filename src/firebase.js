import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA61Jl7y-wG8ci1L6RmyZboujlLBMw_emA",
  authDomain: "chatapp-f5d67.firebaseapp.com",
  databaseURL: "https://chatapp-f5d67-default-rtdb.firebaseio.com",
  projectId: "chatapp-f5d67",
  storageBucket: "chatapp-f5d67.appspot.com",
  messagingSenderId: "693964413893",
  appId: "1:693964413893:web:17a77cd94015df941d49ac",
  measurementId: "G-P05G99B85M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

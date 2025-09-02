// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmZm0iaVNXG6L7qhUJ-JbiAVz3yqDAI_8",
  authDomain: "cineo-d7155.firebaseapp.com",
  projectId: "cineo-d7155",
  storageBucket: "cineo-d7155.firebasestorage.app",
  messagingSenderId: "52272249824",
  appId: "1:52272249824:web:c04abddf1254d195c1c985",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

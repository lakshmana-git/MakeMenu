// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FIREBASE,
  authDomain: "make-menu-91119.firebaseapp.com",
  projectId: "make-menu-91119",
  storageBucket: "make-menu-91119.appspot.com",
  messagingSenderId: "979202100283",
  appId: "1:979202100283:web:19b47c262659b77ce3e01e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
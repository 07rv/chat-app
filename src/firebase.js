// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpds_JJ6MtNTzZ9elKzXzD5c1ufdo6IUk",
  authDomain: "chatapp-57349.firebaseapp.com",
  projectId: "chatapp-57349",
  storageBucket: "chatapp-57349.appspot.com",
  messagingSenderId: "632455860438",
  appId: "1:632455860438:web:ac3b7d20631a1648503977",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

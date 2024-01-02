// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFL9OJ7HXmwyWODtbTiZfcKG08H-rtej0",
  authDomain: "blogproject-c72c4.firebaseapp.com",
  projectId: "blogproject-c72c4",
  storageBucket: "blogproject-c72c4.appspot.com",
  messagingSenderId: "994293387517",
  appId: "1:994293387517:web:e88180223639942bc12e94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDScrnXjYgMY1oQwQKztGoSejyUg4X7aiU",
  authDomain: "hammerandgavel-a14c6.firebaseapp.com",
  projectId: "hammerandgavel-a14c6",
  storageBucket: "hammerandgavel-a14c6.appspot.com",
  messagingSenderId: "766328270809",
  appId: "1:766328270809:web:800bb935d24f2210a4b3c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth();

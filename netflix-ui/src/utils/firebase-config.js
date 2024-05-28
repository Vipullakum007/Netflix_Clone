// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGBHwyd4mmsWu3DdZ2fwBGymQsccBIzzU",
  authDomain: "react-netflix-clone-2f2d7.firebaseapp.com",
  projectId: "react-netflix-clone-2f2d7",
  storageBucket: "react-netflix-clone-2f2d7.appspot.com",
  messagingSenderId: "327639685740",
  appId: "1:327639685740:web:da05487f961ef02e4ed649",
  measurementId: "G-7DKBVHXZ22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
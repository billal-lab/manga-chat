// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCw3MmaxfLNdRFLQZIGh0jIJxEiPPEBiVk",
  authDomain: "react-b63c7.firebaseapp.com",
  projectId: "react-b63c7",
  storageBucket: "react-b63c7.appspot.com",
  messagingSenderId: "829980992642",
  appId: "1:829980992642:web:1987fd725edf676e6c409b",
  measurementId: "G-BD7EET1PET"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export {provider};
export default db;
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0N3OKz4SKLF3OjHE3PyZaBMOk7qbhKTs",
  authDomain: "react-firebase-102d0.firebaseapp.com",
  projectId: "react-firebase-102d0",
  storageBucket: "react-firebase-102d0.appspot.com",
  messagingSenderId: "782093959690",
  appId: "1:782093959690:web:0ce692a9ed204f367e55f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaTZo-p6Uklkh5EXUrMwgqZ2QikfTLO-U",
  authDomain: "react-24874.firebaseapp.com",
  projectId: "react-24874",
  storageBucket: "react-24874.appspot.com",
  messagingSenderId: "937579297466",
  appId: "1:937579297466:web:916a8012e93e5b137a6083"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCj9MGyM5s6rfonnfy9VF4WNKwK5ap13sI",
  authDomain: "react-js-api-assigment.firebaseapp.com",
  projectId: "react-js-api-assigment",
  storageBucket: "react-js-api-assigment.appspot.com",
  messagingSenderId: "782227545501",
  appId: "1:782227545501:web:5e8536d3c27fd24a0ae374",
};
const firebase_App = initializeApp(firebaseConfig);
const auth = getAuth(firebase_App);
const provider = new GoogleAuthProvider();

export { firebase_App, auth, provider };

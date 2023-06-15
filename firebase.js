
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth' 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe-ZorvGbP3Ax_c1xGdL8WB58wEU27zqA",
  authDomain: "ambuserve-clone-next.firebaseapp.com",
  projectId: "ambuserve-clone-next",
  storageBucket: "ambuserve-clone-next.appspot.com",
  messagingSenderId: "516646441923",
  appId: "1:516646441923:web:6be54ff2bec7a6765aa376",
  measurementId: "G-QJ21JG1RGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth= getAuth()

export {app,provider,auth}
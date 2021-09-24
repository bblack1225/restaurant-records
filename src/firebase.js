// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI1e01gflhrCelYdiUdzcHq1h8P_ngkLM",
  authDomain: "restaurant-records.firebaseapp.com",
  projectId: "restaurant-records",
  storageBucket: "restaurant-records.appspot.com",
  messagingSenderId: "344173900500",
  appId: "1:344173900500:web:0c8b625cd6acf647094141",
  measurementId: "G-EDVP9VPNEG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

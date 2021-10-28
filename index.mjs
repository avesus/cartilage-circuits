// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK7maJDIm81-zCv4D5vwYlJ_NMF_RRpgA",
  authDomain: "cartilage-circuits.firebaseapp.com",
  projectId: "cartilage-circuits",
  storageBucket: "cartilage-circuits.appspot.com",
  messagingSenderId: "149029962037",
  appId: "1:149029962037:web:9cf8e36cd68486d2ed4c7c",
  measurementId: "G-EKKB396R58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


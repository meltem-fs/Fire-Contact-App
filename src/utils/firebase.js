// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXzZuiyrIrv3NXH3MeslYIAP-E1fV-bCY",
  authDomain: "fir-contact-ed9d2.firebaseapp.com",
  databaseURL: "https://fir-contact-ed9d2-default-rtdb.firebaseio.com",
  projectId: "fir-contact-ed9d2",
  storageBucket: "fir-contact-ed9d2.appspot.com",
  messagingSenderId: "767153535828",
  appId: "1:767153535828:web:8c5daff760ecc4b0f4a6c1",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
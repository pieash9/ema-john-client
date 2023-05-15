// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFjei5t9ubYIb-RtTFv69haG7bv2R_oDU",
  authDomain: "ema-john-with-fiirebase-auth.firebaseapp.com",
  projectId: "ema-john-with-fiirebase-auth",
  storageBucket: "ema-john-with-fiirebase-auth.appspot.com",
  messagingSenderId: "507614339005",
  appId: "1:507614339005:web:8bd81f44d258ee0feafcd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
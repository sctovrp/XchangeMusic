// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy-J49sjEGquysrdSzYCUdcwdIo2nGGfY",
  authDomain: "xchangemusic-59273.firebaseapp.com",
  projectId: "xchangemusic-59273",
  storageBucket: "xchangemusic-59273.appspot.com",
  messagingSenderId: "829634574933",
  appId: "1:829634574933:web:0ff8bb20041469197d32dc",
  measurementId: "G-P3SZ9E8M3V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
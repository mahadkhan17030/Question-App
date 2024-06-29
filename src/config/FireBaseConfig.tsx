// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvk20IwINLZVWQz_LYSqwpo-O-HJDhnAE",
  authDomain: "questionapp-aaa49.firebaseapp.com",
  databaseURL: "https://questionapp-aaa49-default-rtdb.firebaseio.com",
  projectId: "questionapp-aaa49",
  storageBucket: "questionapp-aaa49.appspot.com",
  messagingSenderId: "404007758497",
  appId: "1:404007758497:web:b303192b2dd78ac8c1dee0",
  measurementId: "G-5GJ4GRNYRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export default app;
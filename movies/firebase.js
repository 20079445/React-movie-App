// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/Movies";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCLlHnEsMPK-Aps4y9SB0jnTVnKVu6fPY",
  authDomain: "movies-app-45dc6.firebaseapp.com",
  projectId: "movies-app-45dc6",
  storageBucket: "movies-app-45dc6.appspot.com",
  messagingSenderId: "438698123675",
  appId: "1:438698123675:web:99dd9cffb1ee20004d013e",
  measurementId: "G-2WC7VDZES4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
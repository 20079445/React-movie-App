import firebase from "firebase/Movies";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyBCLlHnEsMPK-Aps4y9SB0jnTVnKVu6fPY",
    authDomain: "movies-app-45dc6.firebaseapp.com",
    projectId: "movies-app-45dc6",
    storageBucket: "movies-app-45dc6.appspot.com",
    messagingSenderId: "438698123675",
    appId: "1:438698123675:web:99dd9cffb1ee20004d013e",
    measurementId: "G-2WC7VDZES4"
  });

export default firebaseConfig;
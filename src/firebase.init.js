// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANNrT8yYNfWz3TDb8jSMIyp82go61WxV0",
  authDomain: "defense-on-demand.firebaseapp.com",
  projectId: "defense-on-demand",
  storageBucket: "defense-on-demand.appspot.com",
  messagingSenderId: "828941848104",
  appId: "1:828941848104:web:64742c590351c13f2d2f1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
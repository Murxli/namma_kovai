import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCBbebVdLNQXGWlf9o3GExaqEn-uanqbS8",
    authDomain: "namma-kovai-4a35e.firebaseapp.com",
    projectId: "namma-kovai-4a35e",
    storageBucket: "namma-kovai-4a35e.appspot.com",
    messagingSenderId: "46906897865",
    appId: "1:46906897865:web:7243035e42c2cb1eabe418",
    measurementId: "G-B0GTWQ501L"
  };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
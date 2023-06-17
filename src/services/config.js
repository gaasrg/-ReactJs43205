import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ecommerce-apple.firebaseapp.com",
    projectId: "ecommerce-apple",
    storageBucket: "ecommerce-apple.appspot.com",
    messagingSenderId: "602568490051",
    appId: "1:602568490051:web:c4960b3cefc1cd170f28f6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
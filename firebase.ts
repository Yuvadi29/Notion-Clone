import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJ-g42jjjxEOdaI9XeyZdouQwtvRs3sRk",
    authDomain: "notion-clone-ecb79.firebaseapp.com",
    projectId: "notion-clone-ecb79",
    storageBucket: "notion-clone-ecb79.appspot.com",
    messagingSenderId: "635099287773",
    appId: "1:635099287773:web:bd0578e36f772b18fb4b34",
    measurementId: "G-RTD02LNHGX"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
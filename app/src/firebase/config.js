import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD57R2JQfucpuTaJO0AdvQhBTzt75JB7ag",
    authDomain: "react-app-28403.firebaseapp.com",
    projectId: "react-app-28403",
    storageBucket: "react-app-28403.appspot.com",
    messagingSenderId: "823901309753",
    appId: "1:823901309753:web:96bcb4ece160ffa68176e8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

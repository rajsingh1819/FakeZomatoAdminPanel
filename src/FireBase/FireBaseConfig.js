//npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA73sr6dSB0ieBwfXFGCc8_t-916KIVRKQ",
    authDomain: "test-c89ff.firebaseapp.com",
    projectId: "test-c89ff",
    storageBucket: "test-c89ff.appspot.com",
    messagingSenderId: "99756934160",
    appId: "1:99756934160:web:6cb26fb19d152836e83695",
    measurementId: "G-QN9TVVZHEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
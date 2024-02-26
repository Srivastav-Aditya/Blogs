// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA60lYXyeFjCD1q4biAox3u4fBmW9pj6rI",
  authDomain: "papswap-blog.firebaseapp.com",
  projectId: "papswap-blog",
  storageBucket: "papswap-blog.appspot.com",
  messagingSenderId: "493051938207",
  appId: "1:493051938207:web:faeb9b9e5c1e32d5f529aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { fireDb, auth, storage };
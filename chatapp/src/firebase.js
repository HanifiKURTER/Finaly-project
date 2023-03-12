import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAPyaLX0u5tUgzxU9tCs_mHkzZlIeu_hYQ",
  authDomain: "chatapp-42ea5.firebaseapp.com",
  projectId: "chatapp-42ea5",
  storageBucket: "chatapp-42ea5.appspot.com",
  messagingSenderId: "839637290337",
  appId: "1:839637290337:web:e7431e015d31c7b599c920"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
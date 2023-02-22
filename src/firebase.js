import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBa8dtfG05JuzZB3j5WX3Xgh23oNrpZ6v4",
  authDomain: "clone-56701.firebaseapp.com",
  projectId: "clone-56701",
  storageBucket: "clone-56701.appspot.com",
  messagingSenderId: "704060700081",
  appId: "1:704060700081:web:8c5d9dab7bd447d58bf990"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)

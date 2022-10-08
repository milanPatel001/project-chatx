import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGP1pAkenwJeW0afQlJ-j6hNYp3gRaAtY",
  authDomain: "project-chat-2987e.firebaseapp.com",
  projectId: "project-chat-2987e",
  storageBucket: "project-chat-2987e.appspot.com",
  messagingSenderId: "941241687628",
  appId: "1:941241687628:web:1f7ba26384ea807aa0dee9",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };

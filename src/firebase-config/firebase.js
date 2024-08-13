import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA60XD5xB1yUjhaukVS4e1Xbng2B5ru9D8",
  authDomain: "project-dashboard-ea3f6.firebaseapp.com",
  projectId: "project-dashboard-ea3f6",
  storageBucket: "project-dashboard-ea3f6.appspot.com",
  messagingSenderId: "857946334267",
  appId: "1:857946334267:web:20a6717b73bd08decfa81e",
  measurementId: "G-RWPZR8NPBX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

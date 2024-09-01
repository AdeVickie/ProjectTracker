import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA60XD5xB1yUjhaukVS4e1Xbng2B5ru9D8",
//   authDomain: "project-dashboard-ea3f6.firebaseapp.com",
//   projectId: "project-dashboard-ea3f6",
//   storageBucket: "project-dashboard-ea3f6.appspot.com",
//   messagingSenderId: "857946334267",
//   appId: "1:857946334267:web:20a6717b73bd08decfa81e",
//   measurementId: "G-RWPZR8NPBX",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAdR6mUvRQzW2LKA3CczE1AkZ1ZAQ_OKLI",
  authDomain: "track-your-project.firebaseapp.com",
  projectId: "track-your-project",
  storageBucket: "track-your-project.appspot.com",
  messagingSenderId: "97667623161",
  appId: "1:97667623161:web:1512f34fb2bdbb9a569a28",
  measurementId: "G-RSC8TC8YZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

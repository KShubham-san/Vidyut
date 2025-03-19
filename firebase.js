// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK6ERxBeqllVW70VwMYs5Pss9oMGhShX8",
  authDomain: "vidyut-b88c5.firebaseapp.com",
  projectId: "vidyut-b88c5",
  storageBucket: "vidyut-b88c5.appspot.com",
  messagingSenderId: "552051945759",
  appId: "1:552051945759:web:79038ee244d63ba38bc02a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Export Firebase services for use in other files
export { app, db, auth };
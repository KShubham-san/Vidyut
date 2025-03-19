// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

// Debugging: Log if Firebase is connected
console.log("✅ Firebase initialized:", app);

// Export Firebase services
export { app, db, auth };

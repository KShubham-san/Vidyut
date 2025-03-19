import { db, auth } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

// Debugging Logs
console.log("profile.js is loaded!");

// Wait for DOM to Load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn").addEventListener("click", saveProfile);
    console.log("Event listener attached!");
});

// Check Authentication
onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("No user found! Redirecting...");
        window.location.href = "login.html";
    } else {
        console.log("User found:", user.uid);
    }
});

// Save Profile Data
async function saveProfile() {
    console.log("Save button clicked!");  // Check if this logs

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const stream = document.getElementById("stream").value;
    const studentClass = document.getElementById("class").value;
    const dailyTarget = document.getElementById("daily-target").value.trim();

    if (!name || !dob || !gender || !stream || !studentClass || !dailyTarget) {
        alert("Please fill all required fields!");
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        alert("User not logged in! Redirecting...");
        window.location.href = "login.html";
        return;
    }

    try {
        await setDoc(doc(db, "users", user.uid), { name, dob, phone, gender, stream, studentClass, dailyTarget });
        alert("Profile saved successfully!");
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Error saving profile:", error);
        alert("Failed to save profile. Try again.");
    }
}
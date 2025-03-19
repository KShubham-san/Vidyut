import { db, auth } from "./firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".btn").addEventListener("click", saveProfile);
});

onAuthStateChanged(auth, (user) => {
    if (!user) {
        alert("User not found! Redirecting to login.");
        window.location.href = "login.html";
    }
});

async function saveProfile() {
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;
    const stream = document.getElementById("stream").value;
    const studentClass = document.getElementById("class").value;
    const dailyTarget = document.getElementById("daily-target").value.trim();

    const user = auth.currentUser;
    if (!user) return window.location.href = "login.html";

    await setDoc(doc(db, "users", user.uid), { name, dob, phone, gender, stream, studentClass, dailyTarget });
    window.location.href = "dashboard.html";
}
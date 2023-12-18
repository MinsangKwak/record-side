// join
import { auth, createUserWithEmailAndPassword } from "./firebaseInit.js";

document.querySelector("#join-form").addEventListener("submit", function (e) {
	e.preventDefault();

	const email = document.querySelector("#input-email").value;
	const password = document.querySelector("#input-password").value;

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log("Account created:", userCredential.user);
			window.location.href = "login.html";
		})
		.catch((error) => {
			console.error("Error creating account:", error);
			alert("Error creating account: " + error.message);
		});
});

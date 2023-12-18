// login
import { auth, signInWithEmailAndPassword } from "./firebaseInit.js";

document.querySelector("#login-form").addEventListener("submit", function (e) {
	e.preventDefault();

	const email = document.querySelector("#input-email").value;
	const password = document.querySelector("#input-password").value;

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log("Logged in:", userCredential.user);
			window.location.href = "main.html";
		})
		.catch((error) => {
			console.error("Login failed:", error);
			alert("Login failed: " + error.message);
		});
});

document.querySelector("#btn-join").addEventListener("click", function () {
	setTimeout(function () {
		window.location.href = "join.html"; // 2초 후 login.html로 리디렉션
	}, 2000);
});

import { auth, signOut, onAuthStateChanged } from "./firebaseInit.js";

onAuthStateChanged(auth, (user) => {
	if (!user) {
		window.location.href = "error.html";
	}
});

document.getElementById("logout-button").addEventListener("click", () => {
	signOut(auth)
		.then(() => {
			window.location.href = "logout.html";
		})
		.catch((error) => {
			console.error("Logout failed:", error);
		});
});

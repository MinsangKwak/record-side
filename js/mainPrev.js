import { auth, signOut, onAuthStateChanged } from "./firebaseInit.js";

onAuthStateChanged(auth, (user) => {
	if (!user) {
		window.location.href = "error.html";
	}
});

document.querySelector("#btn-logout").addEventListener("click", () => {
	signOut(auth)
		.then(() => {
			window.location.href = "logout.html";
		})
		.catch((error) => {
			console.error("Logout failed:", error);
		});
});

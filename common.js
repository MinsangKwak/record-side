import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
	collection,
	addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
	// https://firebase.google.com/?hl=ko
	// 파이어베이스에 접속한 후 프로젝트 설정에 들어갑니다.
	// 본인 firebaseConfig 내용으로 설정해 줍니다.

	  apiKey: "AIzaSyAN5_p4nhmJzv0XP1YGlmaEpSN6zrrwB1I",
	  authDomain: "music-gallery-6fc61.firebaseapp.com",
	  projectId: "music-gallery-6fc61",
	  storageBucket: "music-gallery-6fc61.appspot.com",
	  messagingSenderId: "460639710541",
	  appId: "1:460639710541:web:d7dd21b4a44542ee0d5b04",
	  measurementId: "G-P9MD8LT3FT"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//---------------------------------------------------------------------------------------

// 데이터 추가
document
	.querySelector("#btnRecord")
	.addEventListener("click", async function () {
		let title = document.getElementById("title_input").value;
		let comment = document.getElementById("comment_input").value;
		let star = document.getElementById("comment_star").value;
		let image = document.getElementById("image_input").value;

		if (!star) {
			alert("별점을 선택해주세요!");
			return; // 별점이 선택되지 않았으면 함수를 종료
		}

		try {
			const docRef = await addDoc(collection(db, "albums"), {
				title: title,
				comment: comment,
				star: star || "0", // 별점이 선택되지 않았을 때 기본값 설정
				image: image,
			});

			alert("앨범이 추가되었습니다!");
			window.location.reload();
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	});

// 데이터 읽기 및 카드 생성
let cardContainer = document.querySelector(".card-container");
cardContainer.innerHTML = ""; // 카드 컨테이너 초기화
const querySnapshot = await getDocs(collection(db, "albums"));

querySnapshot.forEach((doc) => {
	let data = doc.data();
	let title = data.title;
	let comment = data.comment;
	let star = "⭐".repeat(data.star);
	let image = data.image;

	let tempHtml = `<div class="col">
        <div class="card h-100">
            <img src="${image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${comment}</p>
                <p>${star}</p>
            </div>
        </div>
    </div>`;

	cardContainer.insertAdjacentHTML("beforeend", tempHtml);
});

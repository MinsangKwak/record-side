// Firebase 초기화 및 모듈 임포트
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
	collection,
	addDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { auth, signOut, onAuthStateChanged } from "./firebaseInit.js";

const firebaseConfig = {
	apiKey: "AIzaSyAN5_p4nhmJzv0XP1YGlmaEpSN6zrrwB1I",
	authDomain: "music-gallery-6fc61.firebaseapp.com",
	projectId: "music-gallery-6fc61",
	storageBucket: "music-gallery-6fc61.appspot.com",
	messagingSenderId: "460639710541",
	appId: "1:460639710541:web:d7dd21b4a44542ee0d5b04",
	measurementId: "G-P9MD8LT3FT",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 사용자 인증 상태 체크
onAuthStateChanged(auth, (user) => {
	if (!user) {
		window.location.href = "error.html";
	}
});

// 로그아웃 기능
document.querySelector("#btn-logout").addEventListener("click", (e) => {
	e.preventDefault();
	signOut(auth)
		.then(() => {
			window.location.href = "logout.html";
		})
		.catch((error) => {
			console.error("Logout failed:", error);
		});
});

// 데이터 추가 기능
document
	.querySelector("#btn-record")
	.addEventListener("click", async function () {
		let title = document.getElementById("album-title").value;
		let comment = document.getElementById("album-comment").value;
		let star = document.getElementById("album-star").value;
		let image = document.getElementById("album-art").value;

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

let lastVisible; // 마지막 문서 스냅샷
let currentPage = 1; // 현재 페이지 번호
const pageSize = 2; // 한 페이지에 표시할 항목 수

// 데이터 읽기 및 카드 생성
async function loadAlbums() {
	// let cardContainer = document.querySelector(".card-container");
	// cardContainer.innerHTML = "";
	// const querySnapshot = await getDocs(collection(db, "albums"));

    let cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";

    let query;
    if (page === 1) {
	query = query(collection(db, "albums"), orderBy("createdAt", "desc"), limit(pageSize));
    } else if (lastVisible) {
	query = query(collection(db, "albums"), orderBy("createdAt", "desc"), startAfter(lastVisible), limit(pageSize));
    }

    const querySnapshot = await getDocs(query);
    lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];


	querySnapshot.forEach((doc) => {
		let data = doc.data();
		let title = data.title;
		let comment = data.comment;
		let star = "⭐".repeat(data.star);
		let image = data.image;

		let tempHtml = `
        <div class="card h-100">
            <div class="card-inner">
                <img src="${image}"
                    class="card-img-top" alt="${image}+의 주소를 가진 이미지 입니다}">
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${comment}</p>
                    <p class="card-star">${star}</p>
                </div>
            </div>
        </div>`;

		cardContainer.insertAdjacentHTML("beforeend", tempHtml);
	});
}

// 페이지네이션 컨트롤 이벤트 핸들러
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector("#nextPage").addEventListener("click", () => {
        currentPage += 1;
        loadAlbums(currentPage); // currentPage를 매개변수로 전달
    });

    document.querySelector("#prevPage").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage -= 1;
            loadAlbums(currentPage); // currentPage를 매개변수로 전달
        }
    });

    // 초기 데이터 로드
    loadAlbums(currentPage); // currentPage를 매개변수로 전달
});


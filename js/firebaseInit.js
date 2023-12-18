// firebase init
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// getAuth: Firebase 인증 서비스의 인스턴스를 반환합니다.
// signInWithEmailAndPassword: 이메일과 비밀번호를 사용하여 로그인합니다.
// onAuthStateChanged: 사용자의 인증 상태가 변경될 때마다 호출되는 리스너를 설정합니다.
// signOut: 현재 사용자를 로그아웃시킵니다.

const firebaseConfig = {
	apiKey: "AIzaSyAN5_p4nhmJzv0XP1YGlmaEpSN6zrrwB1I",
	authDomain: "music-gallery-6fc61.firebaseapp.com",
	projectId: "music-gallery-6fc61",
	storageBucket: "music-gallery-6fc61.appspot.com",
	messagingSenderId: "460639710541",
	appId: "1:460639710541:web:d7dd21b4a44542ee0d5b04",
	measurementId: "G-P9MD8LT3FT",
};
// 이 객체는 Firebase 프로젝트의 구성을 포함합니다. 여기에는 API 키, 도메인, 프로젝트 ID 등이 포함됩니다.

const app = initializeApp(firebaseConfig);
// initializeApp 함수를 사용하여 Firebase 앱을 초기화합니다. 이 함수는 위에서 정의한 firebaseConfig 객체를 인자로 받습니다.

export const auth = getAuth(app);
// getAuth 함수를 호출하여 Firebase 인증 인스턴스를 생성하고 auth 변수에 할당합니다. 이 변수는 다른 파일에서 사용될 수 있도록 export됩니다.

export {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signOut,
};
// 함수들을 export합니다. 이를 통해 다른 JavaScript 파일에서 이 함수들을 임포트하여 사용할 수 있습니다.

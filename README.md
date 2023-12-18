### 프로젝트 제목

## 개요
본 프로젝트는 Firebase를 사용하여 데이터베이스를 생성하고 관리하는 웹 애플리케이션입니다. 사용자는 이 웹 애플리케이션을 통해 정보를 입력하고, 저장된 데이터를 조회할 수 있습니다. 자바스크립트를 사용하여 사용자 인터페이스를 구현하였으며, Bootstrap 프레임워크를 활용하여 스타일링을 적용하였습니다.

## 주요 기능
데이터 추가: 사용자는 제목, 코멘트, 별점, 이미지를 입력하여 데이터베이스에 저장할 수 있습니다.
데이터 조회: 저장된 데이터를 카드 형태로 조회할 수 있으며, 각 카드에는 제목, 코멘트, 별점, 이미지가 표시됩니다.

## 사용 기술
Firebase: 데이터 저장 및 관리를 위한 백엔드 서비스로 Firebase를 사용합니다.
JavaScript: 클라이언트 사이드 스크립트 언어로 순수 자바스크립트를 사용합니다.
Bootstrap: UI 구성을 위해 Bootstrap 프레임워크를 사용합니다.

### 사용 예제
- 데이터 추가: 제목, 코멘트, 별점, 이미지 URL을 입력 폼에 입력합니다. "추가" 버튼을 클릭하여 데이터를 Firebase에 저장합니다.
- 데이터 조회: 웹 페이지를 방문하거나 새로고침하면, 저장된 데이터가 카드 형태로 표시됩니다.

#### 자바스크립트 구현 세부사항
이 프로젝트에서는 다음과 같은 자바스크립트 함수들을 중점적으로 사용하여 기능을 구현하였습니다:

#### Firebase 초기화 및 사용자 인증 처리 (initializeApp, getAuth)
1. 사용자 회원가입 및 로그인 처리 (createUserWithEmailAndPassword, signInWithEmailAndPassword)
2. 인증 상태 변화 감지 (onAuthStateChanged)
3. 로그아웃 기능 구현 (signOut)
4. Firestore를 사용한 데이터 추가 (addDoc) 및 조회 (getDocs)
<br/>
이러한 함수들을 통해 웹 애플리케이션의 백엔드와 프론트엔드 간의 상호작용을 실현했습니다.

#### 사용 예제
데이터 추가: 제목, 코멘트, 별점, 이미지 URL을 입력 폼에 입력 후 "추가" 버튼 클릭으로 Firebase에 데이터 저장.
데이터 조회: 웹 페이지 방문 혹은 새로고침 시, 저장된 데이터가 카드 형태로 표시.

#### 프로젝트 링크
https://minsangkwak.github.io/record-side/login.html
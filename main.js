import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = { // 아래에 이제 APC에서 쓰는 firebase 프로젝트의 setting 값들을 넣어주면 됨
    apiKey: "AIzaSyDea5LTDfgoq4yV2mhKPS4BnmhzGqsaLg8",
    authDomain: "test-a8aa8.firebaseapp.com",
    databaseURL: "https://test-a8aa8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-a8aa8",
    storageBucket: "test-a8aa8.appspot.com",
    messagingSenderId: "772663523372",
    appId: "1:772663523372:web:1b5722f5d10f4f26a27989"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dataRef = ref(database, 'students'); // 여기 students를 원하는 태그 값으로 바꿔주기

// 실시간으로 데이터 변경 감지(추가 삭제 모두 가능)
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
}, (error) => { // 에러 처리
  console.error(error);
});

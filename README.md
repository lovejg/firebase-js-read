firebase의 json 데이터를 js를 통해 read 하는 코드
realtime database 내에서 추가, 삭제, 수정 등을 실시간으로 감지하기 때문에 한번 켜놓으면 수정된 사항 받아서 즉시 출력
데이터 사용하고 싶으면 출력문 안에 있는 data 변수를 쓰면 됨

**주의사항**
1. package.json에 "type": "module", 추가(name 밑에). 아마도 write가 이미 구현돼있어서 있을것임
2. api 값들은 api firebase 프로젝트 설정값들을 넣어줘야 함
3. ref 부분에서 students는 임의로 넣은 것이므로, 실제 태그 값을 넣어줘야 함

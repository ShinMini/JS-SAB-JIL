# front 개발 언어

1. 종류
	html
	css
	java script
		- 브라우저 화면에 이벤트 처리
		- 동적 구성이 가능한 언어
		- 현대세
			back 단 개발 스펙으로 back end 개발 가능
				- node.js
				
			front 단 framework
				- vue.js, react.js
				
2. 비동기
	js로 front 로직 처리 <-> java or python back 로직 처리	
	
	
	
## Java Script

1. 구성
	1. 변수 - 데이터
	2. 함수 - 독립적으로 개발 가능한 기능
	3. 메소드	- 클래스(객체)가 보유한 기능
	4. class 
	
2. 특징
	1. python 과 흡사
		- 타입 선언 없이 값 대입
		- java는 type 명확
			타입 변수명 = 값;(타입에 부합되는 값만 대입 가능)
			
	2. 위치
		1. html or jsp 파일 내부에 직접 구현
			<script></script>
		2. *.js 라는 파일로 별도로 구현
			<script src="위치와파일명"></script>
	
3. 문법
	참고 예제 : step01jsbasic.html
	1. 변수 선언시 사용하는 키워드
		var
			- js가 첫 탄생부터 제시된 키워드
			- 생략도 가능
				- 변수명만으로 선언 가능
			- 선언된 함수 전 영역에서 사용(호출) 가능
			
		const 
			- 2015년 쯤에 제시된 키워드
			- 선언시 값 초기화 필드
			- 불변 데이터 의미
			- 상수
			- 구글에선 js 개발시 const로 선언 권장
				- 값 변경 못함
				- 실행에 있어서 변경 작업없다는건 실행 속도 향상 고려
				- 안정성 고려
	
		let
			- 2015년 쯤에 제시된 키워드
			- {} 내부에 선언시 {} 내부에서만 사용(호출) 가능

		var, let, const 없이 함수 내부에 선언되는 변수는 전역 변수
		
	2. 함수
		function 함수명([..]){}
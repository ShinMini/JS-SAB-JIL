

// js language
let people = [
   name = "재석",
   age = 6,
   info = function () {
      console.log('name: ' + name + 'age: ' + age)
   }
]

// 새로운 속성 추가
people.adress = '서울';
console.log(people);

// 속성 삭제
delete people.adress;
console.log(people);

console.log(people.info);


console.log(" step02 -JSON[JS Object navigation]");

// json 
let jsonPeople = {
   "name": "연아",
   "age": 50
};
console.log(jsonPeople.name);

console.log(" === step03 -server에서 응답한 데이터라 가정 === ");
/* server가 client에게 응답시 모두다 문자열
단 html text는 html tag로 해석, css text도 css 코드로 인식등
브라우저의 해석기들이 문법 오류 없이 실행
단, json 포멧의 문자열들은 가공이 필요
가공 연습용 test 코드
d1, d3 변수가 응답된 포멧을 브라우저에선 d2, d4처럼 인식
* 주목적 단순 string -> JSON 객체로 변환
*/
let d1 = { "name": "연아", "age": 50 };
//d1 형식으로 서버에서 응답시 가공된 client가 인식하는 데이터

let d2 = '{"name" : "연아", "age" : 50}';

let d22 = JSON.parse(d2); // JSON 포멧으로 변경.

let d3 = { 'name': '연아', 'age': 50 };
//d3 형식으로 서버에서 응답시 가공된 client가 인식하는 데이터

let d4 = "{'name' : '연아', 'age' : 50}";

let d45 = eval("(" + d4 + ")");




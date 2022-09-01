// 매개변수의 디폴트(default value) 지정가능
// (매개변수: 타입 = 매개변수 기본값)
export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => {
     // age 변수의 매개변수 기본값을 10으로 설정
     // 타입스크립트는 매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들 수 있다. 
     const person = {name, age}    // 단축 구문(shorthand)
     // it's same thing const person = {name: name, age: age}
     return person;
}
console.log(makePerson('Jack'));
console.log(makePerson('Jack', 33));

// 객체를 반환하는 화살표 함수 만들기
/* export const makePerson2 = (name: string, age: number = 20): Person => {name, age}

하지만 위와같이 구현했을 경우, 컴파일러는 중괄호 {}를 객체가 아닌 복합 실행문으로 해석합니다. 

따라서 컴파일러가 {}를 객체로 해석하게 하려면 다음처럼 객체를 소괄호로 감싸주어야 합니다. */
export const makePerson3 = (name: string, age: number = 30): Person => ({name, age});
// 한줄로 위와 같은 코드 구현 
console.log(makePerson3('Min'))
console.log(makePerson3('Min', 23));


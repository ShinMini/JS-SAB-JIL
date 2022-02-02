// 일반함수와 고차함수의 차이
const add1 = (a: number, b: number): number => a +b;   // 일반함수
const add2 = (a: number): (number) => number => (b: number): number => a + b;   // 고차함수

const result = add2(1)(2);    // 고차함수의 호출 부분
console.log(result);

// number 타입의 매개변수를 받아 number 타입의 값을 반환하는 함수 시그니처를 NumberToNumberFun 타입으로 정의 
type NumberToNumberFunc = (number) => number;

//이제 NumberToNumberFunc과 같은 타입의 함수를 반환하는 add와 같은 함수를 만들 수 있다. 
export const add = (a: number): NumberToNumberFunc => { 
     // NumberToNumberFunc 타입의 함수 변환

}
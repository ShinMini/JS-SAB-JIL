const functionExample = (a:number, b: number) => { console.log(a+b)};

const exFun = (a:number, b?:number) => a + b;

exFun(19, 20);

exFun(400);

functionExample(1,2);

const 함수이름 = (매개변수1: number, 매개변수2: number): number => {return 매개변수1 + 매개변수2};

let value2 = 함수이름(2, 3);

console.log(value2);

// 함수를 복합 실행문으로 구성한 경우
//function isGreater(a:number, b:number): boolean{ 
//    a > b     // 결과 반환 X
//}

// 실행문 기반 언어는 이러한 문제를 해결하기 위해 return 키워드를 도입
function isGreater(a:number, b:number):boolean {
     return a>b     // true 나 false 를 반환 
}

// 이때, return 키워드는 반드시 함수 몸통에서만 사용할 수 있음.
// 아래와 같은 사태 방지용, 
// if(return x> 0) = 1

// call back function
const f = (callback: () => void): void => callback();
// 함수 f는 callback이라는 매개변수가 있음.
// 함수 몸통에서 함수로서 호출함.
// const f = (): void => callback();

// more practical code
export const init = (callback: () => void): void => {
     console.log('default initialization finished.');
     callback();
}
console.log('all initialization finished');

// additional code written by myself
export const alreadyMadeCallback = (doIt) => {
     console.log(doIt);
     if(doIt) {     // doit 매개변수로 값이 들어왔을 때, 값이 있을때, 
          return doIt;
     }   // doit 매개변수로 값이 들어오지 않았을때, 
     // 값이 들어오지 않았을 경우, 냅둠.
     console.log(doIt);
}

export const inital = (alreadyMadeCallback): void =>  {
     alreadyMadeCallback;
}

// 일반함수와 고차함수의 차이
const add1 = (a: number, b: number): number => a +b;   // 일반함수
const add2 = (a: number): (number) => number => (b: number): number => a + b;   // 고차함수

const result = add2(1)(2);    // 고차함수의 호출 부분
console.log(result);
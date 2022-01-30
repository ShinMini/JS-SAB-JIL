// 자바스크립트에서 배열은 객체다!

/* 자바스크립트에서 배열은 다른 언어와 다르게 객체이다. 
배열은 Array 클래스의 인스턴스 인데, 클래스의 인스턴스느 객체이기 때문이다.
Array 클래스는 배열을 사용하는 데 필요한 여러 가지 메서드를 제공합니다. 
그 중 Array.isArray는 매개변수로 전달받은 심벌이 배열인지 객체인지 알려줍니다. */

// 배열의 담긴 각각의 값을 아이탬(item) 또는 원소라고 부른다. 
//정석적인 배열 선언 방식
let arrayName = new Array(3)      // 배열길이를 3으로 설정

// 정석적인 배열 선언 후, push 메서드를 통해 배열 구성 예제
let array = new Array
array.push(1); array.push(2); array.push(3);
console.log(`Array: ${array}`);

// 배열의 타입
/* the type of array in type script is '아이탭 타입[]'
for instance 
Array is number type when array's item is number type.
Array is string type when array's item is string type.  */
let a = [1, 2, 3]   // Array
let o = { name: 'jack', age: 32 }    // Object
console.log(Array.isArray(a), Array.isArray(o))   // true false

console.log(typeof (a[0]))     // string
console.log(typeof (a))     // object
console.log(typeof (o))     // object


// 배열에 타입 주석을 붙이는 법
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['hello', 'world']

type IPerson = { name: string, age?: number }
let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }]

// 문자열과 배열 간 변환
/* 
어떤 프로그래밍 언어는 문자열(string)을 문자(character)들의 배열(array)로 간주합니다.
그러나,
타입스크립트에서는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없습니다.
이러한 특징 때문에 문자열을 배열로 전환할 때는 string 클래스의 split 메서드를 사용합니다. */

// 보통 문자열을 전환할 때는, String 클래스의 split 메서드를 받아 사용합니다. 
// split 메서드는 문자열을 문자로 쪼개는 기준인 구분자(delimiter)를 입력받아
// 문자열을 string[] 배열로 만들어 줍니다. 
// split(delimiter: string): string[]

// 다음의 split 함수는 매개변수로 전달받은 문자열과 구분자를 
// 이용해, String 클래스의 split 메서드를 호출함으로써 string[] 타입의 배열로 만들어 줍니다. 
export const splited = (str: string, delim: string = ''): string[] => str.split(delim);

console.log(splited('hi there !', ' ')); // ' ' 공백 한칸을 기준으로 string 나눔.

// string[] 타입의 배열을 다시 string 타입으로 변환하려면, Array 클래스의 join 메서드를 사용합니다.
// join(구분자: string): string

/* join 함수는 매개변수로 전달받은 string[] 타입 배열과 구분자를 이용해
 String 클래스의 join 메서드를 호출함으로써 문자와 구분자를 결합한, 새 문자열을 반환합니다. 
 아래는 join 메서드를 이용하는 사용자 정의 함수 join을 작성한 예시이다. */
export const joined = (strArray: string[], delimiter: string = ''): string => strArray.join(delimiter);

let joinExample: string[] = ['h', 'l', 'e', 'e', 'o', ' ', 't', 'h', 'e', 'r', 'e'];
console.log(joined(joinExample));
console.log(joined(joinExample, '_'));
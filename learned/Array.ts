// 자바스크립트에서 배열은 객체다!
/* 자바스크립트에서 배열은 다른 언어와 다르게 객체이다. 
배열은 Array 클래스의 인스턴스 인데, 클래스의 인스턴스느 객체이기 때문이다.
Array 클래스는 배열을 사용하는 데 필요한 여러 가지 메서드를 제공합니다. 
그 중 Array.isArray는 매개변수로 전달받은 심벌이 배열인지 객체인지 알려줍니다. */

// 배열의 담긴 각각의 값을 아이탬(item) 또는 원소라고 부른다. 
//정석적인 배열 선언 방식
let arrayname = new Array(3)      // 배열길이를 3으로 설정

// 정석적인 배열 선언 후, push 메서드를 통해 배열 구성 예제
let exarray = new Array
exarray.push(1); exarray.push(2); exarray.push(3);
console.log(`Array: ${exarray}`);

console.log('--------------')
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


console.log('--------------')
// 배열에 타입 주석을 붙이는 법
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['hello', 'world']

type IPerson = { name: string, age?: number }
let personArray: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }]

console.log('--------------')
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

console.log('--------------')
// string[] 타입의 배열을 다시 string 타입으로 변환하려면, Array 클래스의 join 메서드를 사용합니다.
// join(구분자: string): string

/* join 함수는 매개변수로 전달받은 string[] 타입 배열과 구분자를 이용해
 String 클래스의 join 메서드를 호출함으로써 문자와 구분자를 결합한, 새 문자열을 반환합니다. 
 아래는 join 메서드를 이용하는 사용자 정의 함수 join을 작성한 예시이다. */
export const joined = (strArray: string[], delimiter: string = ''): string => strArray.join(delimiter);

let joinExample: string[] = ['h', 'l', 'e', 'e', 'o', ' ', 't', 'h', 'e', 'r', 'e'];
console.log(joined(joinExample));
console.log(joined(joinExample, '_'));

console.log('--------------')
/* 인덱스 연산자
배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 때는 인덱스 연산자(index operator)[인덱스]를 사용합니다. 
인덱스 연산자는 배열의 특정 위치에 있는 아이템을 얻습니다. */

const numbers: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < numbers.length; index++) {
     const item: number = numbers[index]
     console.log(item)
}
console.log('--------------')
// 배열의 비구조화 할당
// 객체뿐만 아니라 배열에도 비구조화 할당을 적용할 수 있습니다. 
// 배열의 비구조화 할당문에서는 객체와 달리 []기호를 사용합니다. 
// 다음코드는 배열에 담긴 아이템을 비구조화 할당문으로 얻습니다. 
let [first, second, third, ...rest] = numbers
console.log(first, second, third, rest) // 1 2 3 [4, 5]

console.log('--------------')
// for ... in 문 
// ESNext 자바스크립트와 타입스크립트는 for문을 좀 더 쉽게 사용하도록
// for...in 문을 제공합니다.
// for...in 문은 객체를 대상으로 사용하지만, 
// 앞서 설명한 것처럼 배열도 객체이므로 배열에 사용할 수도 있습니다. 
// for...in 문은 배열의 인덱스값을 순회합니다. 
let names = ['Jack', 'Jane', 'Steve']

for (let index in names) {
     const name = names[index]
     console.log(`[${index}]: ${name}`)
}
console.log('--------------')
// 만약, for...in 문에 객체를 사용할 때는 객체가 가진 속성(property)을 대상으로 순회합니다.
// 다음 코든느 name과 age 속성을 가진 jack 객체의 속성 이름과 값을 얻는 예입니다. 
let jack = { name: 'Jack', age: 32 }
for (let property in jack) {
     console.log(property)
     console.log(jack)
}
console.log('--------------')
// for...of 문
// ESNext 자바스크립트와 타입스크립트는 for...in과는 사용법이 약간 달느 for...of 문도 제공합니다. 
// for...in 문은 배열의 인덱스값을 대상으로 순회하지만, 
// for...of 문은 배열의 아이템값을 대상으로 순회합니다. 
for (let name of ['Jack', 'Jane', 'Steve'])
     console.log(name)   // Jack Jane Steve
// 이처럼 아이템값만 필요할 때는 for...in 보다 좀 더 간결하게 구현할 수 있습니다. 
console.log('--------------')

// 제네렉 방식 타입
/* 배열을 다루는 함수를 작성할 때는 number[]와 같이 타입이 고정된 함수를 만들기 보다는 
* T[] 형태로 배열의 아이템 타입을 한꺼번에 표현하는 것이 편리합니다. 

* 타입을 T와 같은 일종의 변수(타입 변수)로 취급하는 것을 제네릭(generics)타입이라고 합니다.
*/
// 자바스크립트 함수에 타입스크립트의 제네릭 타입을 사용하는 방법
// const arrayLength = (array) => array.length

// 위 함수르르 number[], string[], IPerson[] 등 다양한 아이템 타입을 가지는 배열에
// 똑같이 적용되게 하려면 배열의 타입 주석을 T[]로 표현합니다. 
console.log('const arrayLength = (arrayT: T[]): number => arrayT.length;') // 이렇게 하면, 컴파일러가 T 의미를 모름. ㅅㄱ
// 그래서 T가 타입변수(type variable)이라고 알려줘야함, 
// 예를 들어, 배열의 길이를 구하는 함수와 배열이 비었는지 판별하는 함수를 제네릭 함수 스타일로 구현하면 다음과 같음
export const arrayLength = <T>(array: T[]): number => array.length
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0

// 색인 키와 값으로 객체 만들기
// ESNext javascript에서 실행 가능.

/* 이 코드는 다음처럼 객체의 속성 이름을 변수로 만들려고 할 때 사용합니다.
 즉, [key]부분이 'name'이면 {name: value} 형태, 
 'firstName'이면 {firstName: value} 형태의 객체를 생성합니다. */
const makeObject = (key, value) => ({[key]: value})

console.log(makeObject('name', 'mini Shin'))
console.log(makeObject('firstName', 'Shin'))

// 타입스크립트에서는 {[key]: value} 형태의 타입을 '색인 가능 타입(inexable type)' 이라고 하며,
// 다음과 같은 형태로 key와 value의 타입을 명시합니다. 

export type KeyValueType = {
     [key: string]: string
}
export const makeObject_TS = (key: string, value: string): KeyValueType => ({[key]: value})

console.log(makeObject_TS('name', 'donghun'))
console.log(makeObject_TS('firstName', 'Kim'))

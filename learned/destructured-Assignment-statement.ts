/* 매개변수에 비구조화 할당문 사용하기 
!! 함수의 매개변수 또한 변수의 일종이므로, 비구조화 할당문을 적용할 수 있다. */

export type People = {name: string, age: number}

const printPeople = ({name, age}: People): void => 
     console.log(`name: ${name}, age: ${age}`);

printPeople({name: 'Maroo', age: 3})     // name: Maroo, age = 3


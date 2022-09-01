/* 순수 함수(pure function) 
* 함수형 프로그래밍에서 함수는 '순수 함수'라는 조건을 만족해야 합니다.
 그러나 타입스크립트의 Array 클래스에는 순수 함수 조건에 부합하지 않는 
 메서드가 많습니다. 따라서 타입스크립트로 함수형 프로그래밍을 하면서
배열의 메서드를 사용할 때는 해당 메서드가 어던 특성이 있는지 살펴야 합니다. */

// 순수 함수란?
// 순수 함수는 부수효과(side-effect)가 없는 함수를 말합니다. 

// 부수 효과(side-effect)란?
// 함수가 가진 고유한 목적 이외에 다른 효과가 나타나는 것을 의미하며, 부작용이라한다.
// 반면 부수효과가 있는 함수는 '불순 함수(impure function)'라고 합니다. 

// 순수 함수의 조건
/*
함수 몸통에 입출력 관련 코드가 없어야 한다.
함수 몸통에서 매개변숫값을 변경시키지 않는다.(즉, 매개변수는 const나 readonly 형태로만 사용한다.)
함수는 몸통에서 만들어진 결과를 즉시 반환한다 
함수 내부에 전역 변수나 정적 변수를 사용하지 않는다. 
함수가 예외를 발생시키지 않는다. 
함수가 콜백 함수로 구혀오디었거나 함수 몸통에 콜백 함수를 사용하는 코드가 없다. 
함수 몸통에 Promise와 같은 비동기 방식으로 동작하는 코드가 없다.
*/

// 타입 수정자 readonly
function forcePureUsedReadonly(array: readonly number[]) {
 // array.push(1);  / 이런식으로 오류가 있음을 미리 알려준다. 
}
/* 
근데, const 키워드가 있는데 굳이 readonly가 또 필요함?
=> 타입스크립트에서 인터페이스, 클래스, 함수의 매개변수 등은 let이나 const 키워드 없이 선언한다.
따라서 이런 심벌에 const와 같은 효과를 주려면 readonly라는 타입 수정자(type modifier)가 필요하다. 
*/

// 불변과 가변
/* 
변수가 const나 readonly를 명시하고 있으면, 변수값은 초깃값을 항상 유지한다.
이런 변수는 변경할 수 없다는 의미로 '불변(immutable)' 변수라고 한다. 
반면에 const나 readonly를 명시하지 않은 변수는 언제든 값을 변경할 수 있다. 
이런 변수는 변경할 수 있다는 의미로 '가변(mutable)' 변수라고 한다. 
/*

// 깊은 복사와 얕은 복사
/* 프로그래밍 언어에서 어떤 변수값을 다른 변숫값으로 설정하는 것을 복사(copy)라고 표현한다. 

이때, 복사에는 '깊은 복사(deep-copy)'와 '얕은 복사(shallow-copy)' 두 종류가 있다. 

순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로, 
매개변수를 가공하려고 할 때 깊은 복사를 실행해 매개변숫값이 변경되지 않게 해야 합니다. 

깊은 복사는 대상 변수값이 바뀔 때 변숫값은 그대로인 형태로 동작합니다.  */
let original = 1;
let copied = original;
copied += 2;
console.log(original, copied);
console.log("----------------------")
// copied 변수는 original 변숫값을 복사한 뒤 2를 더한다. 
// 이때 original 변숫값은 변하지 않는다. 이것이 깊은 복사이다. 

// 타입스크립트에서 number과 boolean 타입은 깊은 복사 형태로 동작한다. 
// 그러나 객체와 배열은 얕은 복사 방식으로 동작한다. 
// 얕은 복사 예시
const originalArray = [5, 3, 9, 7];
const shallowCopiedArray = originalArray;
console.log("변경 전: ", originalArray, shallowCopiedArray);
shallowCopiedArray[0] = 0;
console.log("변경 후: ", originalArray, shallowCopiedArray);
console.log("----------------------")
// 얕은 복사를 한 변수가 변경되면, 원본 배열 또한 변경되는 것을 확인할 수 있다. 

/* 그런데!!!
흥미롭게도 전개 연산자를 사용해 배열을 복사하면 깊은 복사를 할 수 있습니다. 
전 개 연산자를 사용해 배열을 복사한 예시 ⬇️
*/
const oArray = [1, 2, 3, 4];
let deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray)
console.log("----------------------")
/* 배열의 sort 클래스를 순수 함수로 구현하기
Array 클래스는 sort 메서드를 제공해 배열의 아이템을 오름차순(ascend) 혹은 내림차순 (descend)으로 정렬해 줍니다.
그런데 sort 메서드는 원본 배열의 내용을 변경합니다. 
다음 pureSort 함수는 readonly 타입으로 입력 배열의 내용을 유지한 채 정렬할 수 있도록 전개 연산자의 깊은 복사 기능을 사용했습니다. 
*/

export const pureSort = <T>(array: readonly T[]): T[] => { // readonly 타입으로 입력 배열 내용 유지(변환 금지)
 let deepCopied = [...array];  // 전개 연산자를 이용해, 깊은 복사 기능 사용.
 return deepCopied.sort();  // 깊은 복사된 함수를 sort()함수를 이용해 정렬 
}

let beforeSort = [6, 2, 9, 3]
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort);

console.log("----------------------")
/* 배열의 filter 메서드와 순수한 삭제
배열에서 특정 아이템을 삭제할 때는 splice 메서드를 사용합니다. 
그런데 splice는 원본 배열의 내용을 변경하므로 순수 함수에서는 사용할 수 없습니다. 
글너데 흥미롭게도 특정 아이템을 삭제하는데 filter 메서드를 사용할 수 있습니다. 
배열이 제공하는 filter와 map 메서드는 sort와 다르게 깊은 복사 형태로 동작하빈다. 
배열이 제공하는 filter와 map 메서드는 sort와 다르게 깊은 복사 형태로 동작합니다.
따라서 filter 메서드를 사용하면 원본 배열의 내용을 훼손하지 않으면서 조건에 맞지 않는 아이템을 삭제할 수 있습니다. 
예를 들어, filter메서드를 사용해 원본을 훼손하지 않고 조건에 맞는 아이템을 삭제하는 함수(pureDelete)를 다음처럼 작성할 수 있습니다.  */

export const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => boolean): T[] =>
 array.filter((val, index) => cb(val, index) == false);

// 다음 코드는 pureDelete 함수를 이용해 배열과 객체가 섞인 원본을 훼손하지 않으면서, 
// 배열만 모두 제거한 배열(objectsOnly)을 만드는 예시이다.
const mixedArray: object[] = [
 [], { name: 'Jack' }, { name: 'Jane', age: 32 }, ['description']
];
const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));
console.log(mixedArray);
console.log(objectsOnly);
console.log("-------------------");
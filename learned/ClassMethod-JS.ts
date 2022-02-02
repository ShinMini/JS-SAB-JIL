/* function 함수와 this 키워드
 * 타입스크립트의 function 키워드로 만든 함수는 Function이란 클래스의 인스턴스,
 * 즉 함수는 객체라고 했습니다.
 * 객체지향 언어에서 인스턴스는 this 키워드를 사용할 수 있습니다. 
 */
 
 // 결론: 타입스크립트에서 function으로 만든 함수는 
    // Funtion 이라는 [Class]의 [Instance]!!!! 즉, 객체이므로, 
    // this 키워드를 사용할 수 있지만, 
    // 화살표함수로 만든 함수는 this 키워드를 사용할 수 없다.
        // {뭐지? 그러면 화살표함수로 만든 함수는 객체가 아니라는건데;
    
// 메서드란? 
    // 타입스크립트에서 메서드(method)는 function으로 만든 함수 표현식을 담고 있는 속성입니다. 

    // 다음 코드에서 클래스 A는 value 와 method라는 두 개의 속성을 가집니다. value에는 1이라는 값을 설정하지만,
    // method는 () => void 타입의 함수 표현식을 설정합니다.\

//export class A {
//    value: number = 1
//    method: () => void = function(): void {
//        console.log(`value: ${this.value}`)
//    }
//}

// 위 코드를 타입스크립트에서 클래스 속성 중 함수 표현식을 담는 속성은 function 키워드를 생략할 수 있게하는 단축 구문을 제공하는 것을
// 이용하여, 코드를 더 간략화 식킨다면, 다음과 같은 코드를 작성할 수 있다. 
export class B {
    constructor(public value: number = 1) {}
    method(): void {
        console.log(`value: ${this.value}`)
    }
}
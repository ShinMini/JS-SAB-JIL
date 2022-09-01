// 메서드 체인
/* 제이쿼리(JQuery)와 같은 라이브러리들은 객체의 메서드를 이어서
계속 호출하는 방식의 코드를 작성할 수 있습니다.
이러한 방식을 메서드 체인(method chain)이라고 합니다.  */
// $("#p1").css("color", "red").sliideUp(2000).slideDown(2000);

// 타입스크립트로 메서드 체인을 구현하려면 메ㅓ드가 항상 this를 반환하게 합니다. 
export class Calculator {
     constructor(public value: number = 0) {}

     add(value: number) {
          this.value += value
          return this;
     }

     multiply(value: number) {
          this.value *= value
          return this;
     }
}


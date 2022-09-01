// 제네릭(generic)의 사전적 정의
/*
제네릭은 c#, java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다.
특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트들 생성하는데 사용됩니다.
// 제네릭의 한 줄 정리와 예시
// 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미합니다. */
// 일반적인 함수 
function gettextg(text) {
}
gettextg('hi');      // 'hi'
gettextg(10)      // 10
gettextg(true)      // true

// 제네릭 문법이 적용된 함수
function gettextt<t>(text: t): t {
     return text;
}
// 위 함수는 제네릭 기본 문법이 적용된 형태입니다. 
// 이제 함수를 호출할 때 아래와 같이 함수 안에서 사용할 타입을 넘겨줄 수 있습니다. 
gettextt<string>('hi');
gettextt<number>(10);
gettextt<boolean>(true);

// 제네릭을 사용하는 이유
function logtext_string(text: string): string {
     return text;
}    // 위 함수는 string 값만을 받아 string값만을 반환할 수 있다. 
// 이를 해결하기 위해, 
function logtext_any(text: any): any {
     return text;
}    // 이렇게 바꾸면, 모든 값을 받고, 반환할 수 있으나, 
// any타입으로 생성되었기 때문에, 타입검사를 진행하지 안는다. 

// 이러한 문제를 해결할 수 있는 것이 제네릭이다. 
function logtext<t>(text: t): t {
     return text;
}

// 제네릭 함수 호출 방식
// #1
const text1 = logtext<string>("hello generic")

const text2 = logtext("hello generic!!")

// 보통 두 번째 방법이 코드도 더 짧고 가독성이 좋기 때문에 흔하게 사용됩니다.
// 하지만 만약 복잡한 코드에서 두 번재 코드로 타입 추정이 되지 않는다면,
// 첫 번째 방법을 사용하면 됩니다.

/* 
만약 여기서 함수의 인자로 받은 값의 length를 확인하고 싶다면 어떻게 해야 할까요?
아마 아래와 같이 코드를 작성할 겁니다.

 function logtext_length<t>(text: t): t {
      console.log(text.length);     // error: t doesn't have .length
      return text;
 }

하지만 위의 코드를 변환하려 한다면, 컴파일러에서 에러를 발생시킵니다.
왜냐하면, text에 .length가 있다는 단서는 어디에도 없기 때문이죠
다시 위 제네릭 코드의 의미를 살펴보면 함수의 인자와반환 값에 대한 타입을 정하진 않았지만, 입력 값으로 어떤 타입이 들어왔고 반환 값으로 어떤 타입이 나가는지 알 수 있습니다.
따라서, 함수의 인자와 반환 값 타입에 마치 any를 지정한 것과 같은 동작을 한다는 것을 알 수 있죠.
그래서 설령 인자에 number 타입을 넘기더라도 에러가 나진 않습니다.
이러한 특성 때문에 현재 인자인 text에 문자열이나 배열이 들어와도 
아직은 컴파일러 입장에서 .length를 허용할 순 없습니다.
왜냐하면 number가 들어왔을 때는 .length 코드가 유효하지 않으니까요. 
*/

// 따라서 이런 경우, 아래와 같이 제네릭에 타입을 줄 수 있다. 
function logText_Ary<T>(text: T[]): T[] {
     console.log(text.length);     // 제네릭 타입이 배열이기 때문에, 
     return text;   // .length 를 허용합니다. 
}

/* 
위 코드가 기존의 제네릭 코드와 다른 점은 인자의 T[] 부분입니다.
이 제네릭 함수 코드는 일단 T 라는 변수 타입을 받고, 인자 값으로는 
배열 형태의 T 를 받습니다. 예를 들면, 
함수에 [1, 2, 3] 처럼 숫자로 이뤄진 배열을 받으면 반환 값으로 
number 을 돌려주는 것이죠, 이런 방식으로 제네릭을 사용하면
꽤 유연한 방식으로 함수의 타입을 정의해줄 수 있습니다. 
*/
// 더 명시적으로 제네릭 타입 선언하는 방법
function logText_Ary_Clearly<T>(text: Array<T>): Array<T> {
     console.log(text.length);     // 제네릭 타입이 배열이기 때문에, 
     return text;   // .length 를 허용합니다. 
}

// 제네릭 인터페이스에 관하여, 
function logText_inter<T>(text): T {
     return text;
}
// 아래 두 코드는 같은 의미이다.
// #1
let str1: <T>(text: T) => T = logText_inter;
// #1
let str2: { <T>(text: T): T } = logText_inter;

// 위와 같은 변형 방식으로 제네릭 인터페이스 코드를 다음과 같이 작성할 수 있습니다. 
interface GenericLogTextFn {
     <T>(text: T): T;
}

function logText_interface<T>(text): T {
     return text;
}

let myString: GenericLogTextFn = logText_interface;

interface GenericLogTextFn_argument<T> {
     (text: T): T;
}

function logText_interface_Argument<T>(text): T {
     return text;
}
let myString_argu: GenericLogTextFn_argument<string> = logText_interface_Argument;

// 제네릭 클래스
// 제네릭 클래스는 앞서 살펴본 제네릭 인터페이스와 비슷하다. 
class GenericMath<T> {
     pi: T;
     sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
/* 
제네릭 클래스를 선언할 때 클래스 이름 오른쪽에 <T>를 붙여줍니다.
그리고 해당 클래스로 인스턴스를 생성할 때, 타입에 어떤 값이 들어갈지 지정하면 됩니다. 
조금 전에 살펴본 인터페이스처럼 제네릭 클래스도 클래스안에 정의도니 속성들이 정해진 타입으로
잘 동작하게 보장 할 수 있습니다 ! ㅇ발 끝!
*/
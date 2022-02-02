# TypeScript inline styling을 하기 위해서는

* HTML element를 참조하게 되면, .style을 하거나 .textContent를 하는 경우에 에러가 발생한다.

* 그 이유는 아래와같이 queryySelector로 HTML 요소를 참조하게 되면, 해당 참조 요소의 타입은 Element를 상속받는 제네릭 타입 E가 된다.

* 이 Element에는 style, textContent 속성이 없다.

``` TypeScript

querySelector<E extends Element = Element>(selectors: string): E |null;

```

## When a compiler meets an expression, it applies and evaluation to create a value

* there are two methods of calculation
  1. eager evaluation(조급한 계산법)
  2. lazy evaluation(지연 계산법)

## when a compiler meets an function call  statement

* it changes the function expression to certain value,
* by applying an eager evaluation to the expression has been delayed.

## using Anonymous function version

``` JavaScript

let value = (function(a, b) {return a + b;})(1, 2);

```

* 실행문 지향 언어들은 if 문을 'if 실행문' 이라고 표현한다.
* 반면에 표현식 지향 언어들은 if 표현식'이라고 표현합니다.
* if 표현식은 값을 반환하므로 실행문 지향 언어에서는 불가능한 다음과 같은 구문을 작성할 수 있다.

``` JavaScript
  val x = if(a > b) a else b
```

## 콜백함수

* first-class function는 프로그래밍 언어가 제공하는 기능임.
* 일등함수 기능을 제공하는 언어에서 함수는 '함수 표현식'이라는 일종의 값이다.
* 따라서 변수에 담을 수 있음.

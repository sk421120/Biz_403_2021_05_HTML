console.log("a" == "b");
console.log("a" == "a");

let num = 3;

/* Java와 같은 경우는 if() 문에서 Single EQ(=)를 사용하면 syntax error가 난다
    if( num = 3 ) { }
    하지만 다음과 같은 코드는 논리적으로 문제가 없다
    if(  ( num = method() )  ==  3 )
*/

// js 에서는 다음과 같은 코드가 논리적으로는 문제가 될 수 있지만 문법적으로는 정당하다
// if(  (num = 5) == true )

if ((num = 5)) {
  console.log("같은 값");
}

// js에서는 숫자 0, false, null, undefined, NaN(not a number)를 제외한 모든 것은 boolean에서 true로 취급
// if(값) 명령을 사용할 때 위 값의 type 데이터가 나타나면 논리적으로 false 인식되고 그 외에는 무조건 true이다

if (0) {
  console.log(true);
} else {
  console.log(false);
}

if (null) {
  console.log(true);
} else {
  console.log(false);
}

if ("") {
  console.log(true);
} else {
  console.log(false);
}

let num1 = 3;
let num2 = "3";
/*
두 값이 같은지 비교
주로 if, while 등에서 사용

* 동등연산자( == )
  자동으로 형변환이 발생한다
  0 == '0' 을 비교하면 문자열 '0' 숫자 0으로 자동형변환을 해 버린다
  문자열과 숫자의 비교지만 내용만 같으면 같은 것으로 true값이 된다      
* 일치연산자( === )
  무조건 자신의 형(type)을 유지하면서 비교
  0 === '0' 을 비교하면
  1. 두 값의 type이 일치하는지 비교
    같으면 true, 다르면 무조건 false
  2. 두 값의 type이 같으면
    실제 값을 비교하여 같으면 true, 다르면 false
*/
console.log(num1);
console.log(num2);
console.log("==");
console.log(num1 == num2);
console.log("===");
console.log(num1 === num2);

// 문자열 ""과 문자열 "0"을 비교 => false
console.log("" == "0");

// 문자열 ""을 숫자 0으로 변환하고 0 == 0 으로 비교 => true
console.log("" == 0);

// boolean true를 문자열 "true"
console.log("문자열 true와 true 값은 같은가 == ");
console.log("true" == true);
console.log("문자열 false와 false 값은 같은가 == ");
console.log(false == "false");

console.log("0과 문자열 false 같은가 == ");
console.log(0 == "false");

// 숫자 0은 당연히 false이므로 결과는 true / 숫자 0이 false ? => true
console.log("0과 false 값은 같은가 == ");
console.log(0 == false);

// 동등연산자에서는 null하고, undefined을 null == undefined 할때만 true로 인식하고
// 다른 이외의 값과 비교할때는 무조건 false
console.log("null 값과 undefined 값은 같은가 == ");
console.log(null == undefined);

console.log("null 값과 undefined 값은 같은가 == ");
console.log(null == false);

console.log("undefined 값과 false 값은 같은가 == ");
console.log(undefined == false);

// 숫자 0, null, undefined 등은 if에서 false로 인식을 하지만
// 동등연산자를 사용할때는 주의를 해야한다.
console.log("null 값과 0 은 같은가 == ");
console.log(null == 0);

console.log("undefined 값과 0 은 같은가 == ");
console.log(undefined == 0);

console.log("NaN 값과 false 값은 같은가 == ");
console.log(NaN == false);

console.log("null 값과 undefined 값은 일치하는가 === ");
console.log(null === undefined);

console.log("문자열 3과 3 은 일치하는가 === ");
console.log("3" === 3);

console.log("문자열 3의 정수값과 3 은 일치하는가 === ");
console.log(parseInt("3") === 3);

console.log("NaN 값과 3 은 같은가 == ");
console.log(NaN == 3);

console.log("NaN 값과 문자열 3 은 같은가 == ");
console.log(NaN == "3");

console.log("문자열 3이 숫자로 변환할 수 없는가? ");
console.log(isNaN("3"));
console.log("3" == NaN);

console.log("3이 숫자로 변환할 수 없는가? ");
console.log(isNaN(3));
console.log(3 == NaN);

console.log("문자열 S이 숫자로 변환할 수 없는가?(NaN) ");
console.log(isNaN("S"));

console.log("문자열 S이 NaN와 같은가? NaN이 무조건 false ");
console.log("S" == NaN);

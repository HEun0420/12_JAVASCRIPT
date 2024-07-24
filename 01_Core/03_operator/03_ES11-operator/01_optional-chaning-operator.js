/*
옵셔널 체이닝 연산자
좌항의 피연산자가 null 또는 undefiend인 경우
undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

=> 참조될 대상이 존재하는지 불확실할 때 검증하는 역할로 사용
*/

var obj = null;
// let val = obj.value; // Cannot read properties of null

var val = obj?.value;
console.log(val);

console.log("--------------------");


var obj2 = ''
var val = obj && obj.value;
// falsy 값에 따라 결과가 바뀜

console.log("--------------------");


var str = ''

var lan = str?.length;
console.log(len);


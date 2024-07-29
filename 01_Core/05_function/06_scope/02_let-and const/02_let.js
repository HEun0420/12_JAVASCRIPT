/* 
let
var 키워드의 단점을 보완하기 위해 ES6 새로운 변수 선언 키워드인
let, count를 도입
*/

// 1. 변수 중복 선ㅇ넌 금지
let msg = '안녕';

//let, const 같은 스코프 내에서 중복 선언을 허용하지 않는다.
// let msg='안녕히 가세요'


//2. 블록 레벨 스코프
// let 키워드로 선언한 변수는 모든 코드 블록
// (함수, if문, for문, while 문, try/catch 문)을 지역스코프로 인정한다.

let i =0;
for(let i = 0; i <10; i++){
    console.log(`지역변수 i: ${i}`);
}
console.log(`지역변수 i : ${i}`);

// 3. 변수 호이스팅

console.log(x); // Cannot acess 'x' before initialization

let x;

let y= 1;
if(true){
    // 변수 호이스팅으로 아래의 지역변수 y가 먼저 선언되었기 때문에
    // 전역 변수 y를 참조하지 않고, 오류가 발생
    console.log(y);
    let y= 2;
    
}



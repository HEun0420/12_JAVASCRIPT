// 정규표현 메소드

const target ='Java JavaScript';

console.log('--------------exe--------------');

// RegExp.pototype.exec
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 배열로 반환
console.log(/va/.exec(target));

//g 플래그를 지정해도 첫번째 매칭결과만 반환
console.log(/va/g.exec(target)); // g: 문자열 내 패턴과 일치하는 모든 문자열을 전역엥서 검색
console.log(/hello/.exec(target)); // 매칭 결과가 없을 때는, null 반환

console.log('--------------test--------------');

// RegExp.prototype.test
// 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색해서 매칭 결과를 블리언으로 반환
console.log(/va/.test(target)); // true
console.log(/hello/.test(target)); // false

//String.prototype.match
console.log('--------------String.prototype.match--------------');
//String 표준 빌트인 객체가 제공하는 메서드, 대상 무낮열과
// 매칭결과를 배열로 반환







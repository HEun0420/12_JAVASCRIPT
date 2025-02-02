// 배열 메소드

const arr =[];

// 배열의 생성자 함수 = Array
console.log(arr.construtor === Array);

// 배열의 프로토타입 함수 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);


/* 
Array.prototype.indexOf
- indexOf : 배열에서 요소가 위치한 인덱스를 리턴
- lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
- includes : 배열에 해당 요소 포함 여부 리턴
*/

const foodList = ['물회','삼계탕','냉면','수박','물회']

console.log('--------------indexOf--------------');
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); // 0
// 중복값 중 두번째 위치반환
console.log(`foodList.indexOf('물회',1) : ${foodList.indexOf('물회',1)}`); // 4 -> 찾는것들 중 두번째에 있는 물회 반환

console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`); // -1 // 없어서

console.log('--------------LastIndexOf--------------');
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`); // 0
console.log(`foodList.lastIndexOf('물회',1) : ${foodList.lastIndexOf('물회',1)}`); // 4 -> 찾는것들 중 두번째에 있는 물회 반환

console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`); // -1 // 없어서

console.log('--------------includes--------------');
console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`); // ture
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`); // false

/* 
Array.prototype.push: 배열의 맨 뒤의 요소를 추가
Array.prototype.pop : 배열의 맨 뒤에 요소를 제거
*/

const chineseFood =['짜장면','짬뽕','우동']

console.log('--------------push--------------');
console.log(`push 전 chineseFood : ${chineseFood}`);

// chineseFood.push('탕수육');
// chineseFood.push('양장피'); // 개별도 가능 밑의 여러개 묶는 것도 가능
chineseFood.push('탕수육','양장피')

console.log(`push 후 chinsesFood : ${chineseFood}`);

console.log('--------------pop--------------');
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);

console.log(`pop 후 chineseFood : ${chineseFood}`);

// Array.prototype.unshift: 배열의 맨 앞에 요소 추가
// Array.prototype.shift: 배열의 맨 앞 요소 제거 후 반환

const chickenList = ['양념치킨','후라이드','파닭'];

console.log('--------------unshift--------------');
console.log(`unshift 전 chickenList : ${chickenList}`);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');

console.log(`unshift 후 chickenList : ${chickenList}`);

console.log('--------------shift--------------');

console.log(`chickenList.shift : ${chickenList.shift}`); // 마늘치킨
console.log(`chickenList.shift : ${chickenList.shift}`); // 간장치킨
console.log(`chickenList.shift : ${chickenList.shift}`); // 양념치킨

console.log(`shift 후 chickenList : ${chickenList}`);


console.log('--------------concat--------------');
const ido1 =['아이브','뉴빈스'];
const ido2 =['트와이스','레드벨벳'];
const ido3 =['블랙핑크','에스파'];

// 배열명.concat(배열명1, 배열명2 ....)
const mix = ido1.concat(ido2);
const mix2 = ido3.concat(ido1,ido2);

console.log(`${mix}`);
console.log(`${mix2}`);

console.log('--------------slice--------------');
// Array.prototype.slice : 배열의 요소 선택 잘라내기
const front = ['HTML','CSS','JavaScript','jQuery']

// slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`front : ${front}`); 


console.log('--------------join--------------');
// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환

const snackList = ['사탕', '초콜릿', '껌', '과장'];
console.log(`snackjoin(): ${snackList.join()}`); // 구분자
console.log(`snackjoin(): ${snackList.join()}`); // 구분자

console.log('--------------reverse--------------');
// Array.prototype.revers: 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5]reverse() : ${[1,2,3,4,5].reverse()}`);















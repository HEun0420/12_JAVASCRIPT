// [[Prototype]]

const user = {
    activate : true,
    login : function () {
        console.log('로그인이 되었습니다');   
    }
}

const student ={
    passion : true
}

// .__proto__ : [[Prototype]]의 getter, setter 이다.
// 요즘에는 함수 Objcet.getPrototypeOf or Object.setPrototypeOf
// 이 두 메서드를 통해서 get, set 한다.

student.__proto__= user;

console.log(student.activate);

student.login();

console.log(student.passion);

console.log('------프로토타입 체인 -----------');

// 프로토 타입 체인
const greedyStudent = {
    class : 11,
    __proto__: student
}

console.log(greedyStudent.activate); //user
console.log(greedyStudent.passion); //student

/* 
프로토 타입 체이닝은 순환참조가 허용되지 않는다.
__proto__의 값은 객체 또는 null만 가능ㅇ하며 다른 자료형은 무시된다.
*/





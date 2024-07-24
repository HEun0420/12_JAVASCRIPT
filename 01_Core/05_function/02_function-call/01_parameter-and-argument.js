// 매개변수와 인수

function hello(name){

    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    console.log(name);

    console.log(arguments);
    

    return `${name}님 안녕하세요~!`;
}

console.log(hello('홍길동'));


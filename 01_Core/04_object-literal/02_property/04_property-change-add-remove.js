var dog ={
    name: '구찌'
}

// dlal whswogksms vmfhvjxldp rkqtdmf gkfekdgkaus vmfhvjxl rkqtdl rodtlsehlsek.
dog.name = '가린';
// dog['name'] = '가린';
console.log(dog);

// 프로퍼티 동적 추가
// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼ㅣ니가 동적으로 생성되어
// 추가하고,프로퍼티 값이 할당된다.
dog.age = 3;
console.log(dog);

//프로퍼티 삭제
delete dog.age;
console.log(dog);

// 존재하지 않는 프로퍼티를 삭제하면 에러없이 무시된다.
delete dog.something;
console.log(dog);





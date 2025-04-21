var string = 'Hello, world!';
var number = 42;
var boolean = true;
var nullType = null;
var undefinedType = undefined;
var anyType = 'This can be anything'; //사용을 자제해야함
var array = [true, false]; //: number[] = [1, 2, 3, 4, 5] , string[] = [' ']
var userA = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    email: 'usera@example.com',
};
var userB = {
    name: 'Jane Doe',
    age: 25,
    isAdmin: false,
    email: null,
};
// 자바 스크립트 코드는 camelCase로 작성합니다
var letValue = 'Hello world!'; //자바스크립트 내용과 동일하게 적용
var someUserRole = Role.ADMIN;
var func = function (arg) {
    console.log(arg);
    return 'Hello, TypeScript'; //만약 반환값에 숫자 20을 넣는다면?
    //아래에 result 반환값에 number 로 자동정의된다
};
var result = func('Hello, TS!'); //인자의 타입정의를 string으로 정의했기 때문에 숫자 넣으면 오류납니다

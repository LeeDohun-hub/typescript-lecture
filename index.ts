const string: string = 'Hello, world!';
const number: number = 42;
const boolean: boolean = true;
const nullType: null = null;
const undefinedType: undefined = undefined;
const anyType: any = 'This can be anything'; //사용을 자제해야함

const array: boolean[] = [true, false]; //: number[] = [1, 2, 3, 4, 5] , string[] = [' ']

interface User {
  //인터페이로 정의할수 있습니다
  name: string;
  age: number;
  isAdmin: boolean;
  email?: string; //?를 붙이면 선택적 속성으로 정의
}
const userA: User = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  email: 'usera@example.com',
};
const userB: User = {
  name: 'Jane Doe',
  age: 25,
  isAdmin: false,
  email: null,
};

//Type PascalCase로 작성하고,
type StringOrNumberType = string | number; //타입스크립트에서 타입 체크를 하기 위해 만든 코드

// 자바 스크립트 코드는 camelCase로 작성합니다
const letValue: StringOrNumberType = 'Hello world!'; //자바스크립트 내용과 동일하게 적용

const someUserRole: Role = Role.ADMIN;

const func = (arg: string) => {
  console.log(arg);
  return 'Hello, TypeScript'; //만약 반환값에 숫자 20을 넣는다면?
  //아래에 result 반환값에 number 로 자동정의된다
};

const result = func('Hello, TS!'); //인자의 타입정의를 string으로 정의했기 때문에 숫자 넣으면 오류납니다

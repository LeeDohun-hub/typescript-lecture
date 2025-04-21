//과제: divide라고 하는 함수를 만들고 ,
//Role 이라고 하는 커스텀 타입을 만들어서
//이 role의 타입의 어떤 값인지에 따라
//console.log() 함수로 구분하여 출력하는 함수를 만들어보세요
//enum 타입 활용, switch문 활용

/*enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

const divide = (role: Role) => {
  switch (role) {
    case Role.ADMIN:
      console.log('관리자입니다.');
      break;
    case Role.USER:
      console.log('사용자입니다');
      break;
    case Role.GUEST:
      console.log('게스트입니다');
      break;
    default:
      console.log('Unknown role');
  }
};

divide(Role.GUEST); //게스트입니다.
*/
//과제: SimpleUser라고 하는 객체 타입을 만들고, 필드는 name(이름)
//age(나이) LogUser라고 하는 함수를 만들어서
//이름과 나이를 console.log()로 출력하는 함수를 만들어보세요
//최소 3명 이상의 simple 사용자를 만들어서 반복적으로
//  logUser 함수를
//호출하도록 코드를 작성해보세요.

interface SimpleUser {
  name: string;
  age: number;
}

/*const user1: SimpleUser = {
  name: 'Alice',
  age: 28,
};
const user2: SimpleUser = {
  name: 'Bob',
  age: 32,
};
const user3: SimpleUser = {
  name: 'Charlie',
  age: 25,
};
*/
const logUser = (user: SimpleUser) => {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
};

const users: SimpleUser[] = [
  { name: 'Alice', age: 28 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 25 },
];

users.forEach(logUser); //forEach() 메서드는 배열의 각 요소에 대해 주어진 함수를 실행합니다.

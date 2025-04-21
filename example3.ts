//fs 모듈과 JSON 데이터 활용에 대한 문제입니다. User 인터페이스를 만들고,
// 인자로 전달되는 user를 JSON 데이터인 users 배열에 추가하여
//  users.json 파일로 저장하도록 하세요.
// fs 모듈은 프로미스 형태의 것을 사용하면 됩니다.
//한가지 규칙은 user의 id 값이 중복되면 안된다는 것입니다. (중복되는 경우 에러 발생하도록 처리)
//2명 이상의 user 데이터를 추가하고 users.json에 데이터가 추가되어 저장되었는지 확인해보세요. 그리고 중복된 id를 가진 user 데이터를 추가 시도해보고 에러가 발생하는지 확인해보세요.

//fs/promises 임포트 에러 나는 경우 `npm i -D @types/node` node 타입정의 설치
//JSON.stringfy(data)` 로 자바스크립트 데이터를 직렬화 하여 JSON을 생성할 수 있습니다.
//`JSON.parse(jsonString)` 으로 직렬화된 JSON을 자바스크립트 데이터로 변환할 수 있습니다.
//fs.readFile(jsonFile, 'utf-8’) 메서드로 JSON 파일을 불러올 수 있습니다.
//fs.writeFile(fileName, jsonString) 메서드로 JSON 파일을 저장할 수 있습니다.

import fs from 'fs/promises';

interface User {
  id: string; // 중복 되면 안됨
  name: string;
  age: number;
  isAdmin: boolean;
}

const saveUser = async (user: User) => {
  // users.json 파일을 읽어와서 JSON 데이터로 변환
  // 파일이 없으면 빈 배열로 초기화
  let jsonString: string;
  try {
    const jsonString = await fs.readFile(
      'users.json',
      'utf-8',
    );
    console.log(jsonString);
  } catch (error) {
    console.error('Error reading file:', error);
    jsonString = JSON.stringify({ users: [] }); // 파일이 없으면 빈 배열로 초기화
  }

  const data = JSON.parse(jsonString);
  console.log(data);
  //users. 배열에서 중복체크
  const userExists = data.users.some(
    (item: User) => item.id === user.id,
  );
  if (userExists) {
    throw new Error(
      `User with id ${user.id} already exists.`,
    );
  }

  //users 배열에 user추가
  data.users.push(user);
  console.log('data', data);
};

const main = async () => {
  const users: User[] = [
    { id: '1', name: 'Alice', age: 28, isAdmin: false },
    { id: '2', name: 'Bob', age: 32, isAdmin: true },
    { id: '3', name: 'Charlie', age: 25, isAdmin: false },
  ];

  //유저 추가
  for (let i = 0; i < users.length; i++) {
    (await saveUser) == users[i];
  }

  // 중복된 id를 가진 유저 추가 시도
  await saveUser({
    id: '1',
    name: 'Charlie',
    age: 35,
    isAdmin: false,
  });
};

main();

import fetch from 'node-fetch';

//fetch() 함수 사용에 대한 실습 문제입니다.
// jsonplaceholder의 Todo 리스트 API를 사용해서,
// title 값이 velit soluta adipisci molestias reiciendis harum 인 데이터의 id 값을 찾고
//  그 id 값을 console.log로 출력 해보세요.
//API URL: https://jsonplaceholder.typicode.com/todos
//API에서 반환하는 결과 데이터의 JSON 구조를 살펴보고,
// 배열에 포함된 각 Todo 아이템의 interface 타입을 정의하세요.
// 그리고 정의된 Todo의 title 값을 비교해서
// velit soluta adipisci molestias reiciendis harum 와
//  title이 일치하는 Todo의 id 값을 찾습니다.

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  // TODO: todos를 fetch() 함수로 받아와서 타입 주입하여 반환

  //API 호출
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos',
  );
  const todos = await response.json();
  return todos as Todo[];
};
const main = async () => {
  // TODO: fetchTodos를 통해 반환받은 데이터에서 배열의 todo 중 title 일치 확인하여 id 출력
  const result = await fetchTodos();
  const title =
    'velit soluta adipisci molestias reiciendis harum';
  const todo = result.find((item) => item.title === title);
  if (todo) {
    console.log('Todo ID:', todo.id);
  } else {
    console.log('Todo not found');
  }
};

main();

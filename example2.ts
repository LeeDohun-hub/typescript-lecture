//1번 XXXXXX
import dayjs from 'dayjs'; // dayjs 라이브러리 import (날짜 포맷팅에 사용)

// someSchedule 객체: 일정 정보를 담고 있는 객체
const someSchedule = {
  study: '2025-04-03', // 공부 일정
  election: '2025-06-03', // 선거 일정
  trip: '2025-08-01', // 여행 일정
};

// 날짜 포맷 함수: Date 타입의 값을 받아 'YYYY.MM.DD' 형식으로 포맷된 문자열 반환
const formatDate = (date: Date) => {
  const day = dayjs(date); // dayjs 객체 생성
  return day.format('YYYY.MM.DD'); // 'YYYY.MM.DD' 형식으로 포맷
};

// someSchedule 객체의 각 날짜를 포맷된 값으로 변경
someSchedule.study = formatDate(
  new Date(someSchedule.study),
); // 공부 일정 포맷
someSchedule.election = formatDate(
  new Date(someSchedule.election),
); // 선거 일정 포맷
someSchedule.trip = formatDate(new Date(someSchedule.trip)); // 여행 일정 포맷

// 포맷된 someSchedule 객체 출력
console.log(someSchedule);

// TODO: 장바구니의 각 상품 타입정의하고, cart 배열에도 타입 부여하여 상품을 3개이상 추가
// TODO: calcTotal 함수를 만들고 실행하여 지불해야할 총 금액을 계산하여 total에 저장하여 확인

enum Category {
  FRUIT = 'fruit',
  VEGETABLE = 'vegetable',
  ACCESSORY = 'accessory',
}

interface Item {
  name: string;
  category: Category;
  price: number;
  quantity: number;
}

const apple: Item = {
  name: 'apple',
  category: Category.FRUIT,
  price: 1000,
  quantity: 3,
};
const onion: Item = {
  name: 'onion',
  category: Category.VEGETABLE,
  price: 500,
  quantity: 5,
};
const watch: Item = {
  name: 'watch',
  category: Category.ACCESSORY,
  price: 100000,
  quantity: 1,
};

const cart = [apple, onion, watch];

const calcTotal = (items: Item[]) => {
  let total = 0;
  items.forEach((item) => {
    if (item.category !== Category.FRUIT) {
      total += item.price * item.quantity;
    }
  });
  return total;
};

const total = calcTotal(cart);
console.log('total:', total);
/*


interface Item {
	category: Category;
}

const cart = [];

const calcTotal = () => {}

const total = calcTotal(cart);
console.log('total:', total);*/

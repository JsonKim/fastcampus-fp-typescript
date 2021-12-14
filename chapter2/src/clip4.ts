/*
토마토: 7000원
오렌지: 15000원
사과: 10000원
*/
export function priceOfTomato() {
  return 7000;
}

export function priceOfOrange() {
  return 15000;
}

export function priceOfApple() {
  return 10000;
}

export function getPrice(name: string) {
  if (name === "tomato") {
    return 7000;
  } else if (name === "orange") {
    return 15000;
  } else if (name === "apple") {
    return 10000;
  }
}

export const priceOfFruit = {
  tomato: 7000,
  orange: 15000,
  apple: 10000
};

export const isEven = {
  tomato: true,
  orange: true,
  apple: false
};

export const isEvenFn = (str: string) => str.length % 2 === 0;

export function list1() {
  // 토마토, 오렌지, 사과 한 상자
  return priceOfTomato() + priceOfOrange() + priceOfApple();
}

export function list2() {
  // 토마토 2상자
  return priceOfTomato() + priceOfTomato();
}

export function list3() {
  // 오렌지 100상자 구입은 오렌지 가격을 100번 더하는 것과 동일하기 때문에
  // 오렌지 가격 * 100 으로 계산 가능
  // 오렌지 100상자
  return priceOfOrange() * 100;
}

export function getTotalPrice() {
  return list2();
}

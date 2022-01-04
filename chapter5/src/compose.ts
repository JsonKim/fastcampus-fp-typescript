export const compose = <A, B, C>(g: (y: B) => C, f: (x: A) => B) => (x: A) => {
  return g(f(x));
};

// compose 함수의 원래 타입
// <A, B, C>(g: (y: B) => C, f: (x: A) => B) => (x: A) => C

// 매개변수를 지워서 단순하게 표기
// <A, B, C>((B) => C, (A) => B) => (A) => C

export function getPrice(name: string): number | undefined {
  if (name === "tomato") {
    return 7000;
  } else if (name === "orange") {
    return 15000;
  } else if (name === "apple") {
    return 10000;
  }
}

export const isExpensive = (price: number | undefined) => {
  // getPrice의 결과에 undefined가 포함 되어 있기 때문에
  // getPrice와 합성을 위해 undefined에 대한 처리 필요
  if (price === undefined) {
    return false;
  }
  return price > 10000;
};

// isExpensive와 getPrice를 합성해서 하나의 함수로
export const isExpensivePrice = compose(isExpensive, getPrice);

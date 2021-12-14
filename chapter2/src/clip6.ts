/*
토마토: 7000원
오렌지: 15000원
사과: 10000원
*/

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
export const isExpensivePrice = (name: string): boolean => {
  return isExpensive(getPrice(name));
};

export const main = () => {
  return isExpensive(getPrice("tomato"));
};

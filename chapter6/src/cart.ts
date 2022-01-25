export interface Item {
  readonly code: string;
  readonly outOfStock: boolean;
  readonly name: string;
  readonly price: number;
  // 상품은 반드시 한 개 이상 선택하여야 한다.
  // 또한 한 번에 10개가 넘는 상품을 구매할 수 없다.
  readonly quantity: number;
}

export const cart: Array<Item> = [
  {
    code: "tomato",
    outOfStock: false,
    name: "토마토",
    price: 7000,
    quantity: 2
  },
  {
    code: "orange",
    outOfStock: false,
    name: "오렌지",
    price: 15000,
    quantity: -2
  },
  {
    code: "apple",
    outOfStock: true,
    name: "사과",
    price: 10000,
    quantity: 2
  },
  {
    code: "mango",
    outOfStock: false,
    name: "망고",
    price: 12000,
    quantity: 20
  },
  {
    code: "grape",
    outOfStock: false,
    name: "포도",
    price: 5000,
    quantity: 10
  }
];

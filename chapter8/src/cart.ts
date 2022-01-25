export interface Item {
  readonly code: string;
  readonly outOfStock: boolean;
  readonly name: string;
  readonly price: number;
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
];

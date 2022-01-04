import "./index.css";
import { cart, Item } from "./cart";

const stockItem = (item: Item): string => `
  <li>
    <h2>${item.name}</h2>
    <div>가격: ${item.price}원</div>
    <div>수량: ${item.quantity}상자</div>
  </li>
`;

const outOfStockItem = (item: Item): string => `
  <li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
    <div class='strike'>수량: ${item.quantity}상자</div>
  </li>
`;

const item = (item: Item): string => {
  if (item.outOfStock) {
    return outOfStockItem(item);
  } else {
    return stockItem(item);
  }
};

const totalCalculator = (
  list: Array<Item>,
  getValue: (item: Item) => number
) => {
  return (
    list
      // 1. 재고가 있는 상품만 분류하기
      .filter((item) => item.outOfStock === false)
      // 2. 분류된 상품들에 대해서 getValue 실행하기
      .map(getValue)
      // 3. getValue가 실행된 값 모두 더하기
      .reduce((total, value) => total + value, 0)
  );
};

const totalCount = (list: Array<Item>): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: Array<Item>): string => {
  const totalPrice = totalCalculator(
    list,
    (item) => item.price * item.quantity
  );
  return `<h2>전체 가격: ${totalPrice}원`;
};

const list = (list: Array<Item>) => {
  return `
    <ul>
    ${list
      // 1. 목록에 있는 모든 아이템을 태그로 변경
      .map(item)
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

const app = document.getElementById("app");
if (app != null) {
  app.innerHTML = `
  <h1>장바구니</h1>
  ${list(cart)}
  ${totalCount(cart)}
  ${totalPrice(cart)}
  `;
}

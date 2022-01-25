import "./index.css";
import { cart, Item } from "./cart";
import * as O from "./option";

console.clear();

type ArrayItem = Array<Item>;

const stockItem = (item: Item): string => {
  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price}원</div>
      <div>수량: ${item.quantity}상자</div>
    </li>
  `;
};

const outOfStockItem = (item: Item): string => `
  <li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
  </li>
`;

const renderItem = (item: Item): string => {
  if (item.outOfStock) {
    return outOfStockItem(item);
  } else {
    return stockItem(item);
  }
};

const totalCalculator = (list: ArrayItem, getValue: (item: Item) => number) => {
  return list
    .filter((item) => item.outOfStock === false)
    .map(getValue)
    .reduce((total, value) => total + value, 0);
};

const totalCount = (list: ArrayItem): string => {
  const totalCount = totalCalculator(list, (item) => item.quantity);
  return `<h2>전체 수량: ${totalCount}상자`;
};

const totalPrice = (list: ArrayItem): string => {
  const totalPrice = totalCalculator(
    list,
    (item) => item.price * item.quantity
  );

  return `<h2>전체 가격: ${totalPrice}`;
};

const list = (list: ArrayItem) => {
  return `
    <ul>
    ${list
      // 1. 목록에 있는 모든 아이템을 태그로 변경
      .map(renderItem)
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

export const render = (cart: ArrayItem) => {
  O.map(O.fromNull(document.getElementById("app")), (app) => {
    app.innerHTML = `
<h1>장바구니</h1>
${list(cart)}
${totalCount(cart)}
${totalPrice(cart)}
      `;
  });
};

export const main = () => {
  render(cart);
};

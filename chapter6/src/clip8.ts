import "./index.css";
import { cart, Item } from "./cart";
import * as O from "./option";
import * as T from "./try";

console.clear();

type ParsedItem = { _tag: "parsedItem" } & Item;

type ParseError = {
  name: string;
  message: string;
};

const parseItem = (item: Item): T.Try<ParseError, ParsedItem> => {
  if (item.quantity < 1) {
    return T.failed({
      name: item.name,
      message: "상품은 반드시 한 개 이상 담아야 합니다."
    });
  } else if (item.quantity > 10) {
    return T.failed({
      name: item.name,
      message: "한 번에 10개를 초과하여 구매할 수 없습니다."
    });
  }

  return T.success({
    _tag: "parsedItem",
    ...item
  });
};

type ArrayItem = Array<T.Try<ParseError, ParsedItem>>;

const stockItem = (item: ParsedItem): string => {
  return `
    <li>
      <h2>${item.name}</h2>
      <div>가격: ${item.price}원</div>
      <div>수량: ${item.quantity}상자</div>
    </li>
  `;
};

const errorItem = (e: ParseError): string => `
  <li style="color: red">
    <h2>${e.name}</h2>
    <div>${e.message}</div>
  </li>
`;

const outOfStockItem = (item: ParsedItem): string => `
  <li class="gray">
    <h2>${item.name} (품절)</h2>
    <div class='strike'>가격: ${item.price}원</div>
  </li>
`;

const renderItem = (item: ParsedItem): string => {
  if (item.outOfStock) {
    return outOfStockItem(item);
  } else {
    return stockItem(item);
  }
};

const totalCalculator = (list: ArrayItem, getValue: (item: ParsedItem) => number) => {
  return T.KeepSuccess(list)
    // Array<T.Try<ParseError, ParsedItem>> => Array<ParsedItem>
    .filter((item) => {
      try {
        return item.outOfStock === false;
      } catch (e) {
        return false;
      }
    })
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
      .map(item => T.getOrElse(
        T.map(item, parsedItem => renderItem(parsedItem)),
        errorItem
      ))
      // 2. 태그의 목록을 모두 하나의 문자열로 연결
      .reduce((tags, tag) => tags + tag, "")}
    </ul>
  `;
};

const render = (cart: ArrayItem) => {
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
  render(cart.map(parseItem));
};

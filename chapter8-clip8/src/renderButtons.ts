import { fromEvent, zip } from "rxjs";
import { map, scan, mergeAll, mergeMap } from "rxjs/operators";

import { Item } from './cart';
import { render } from './renderList';

const observableFromItem = (item: Item) => {
  const code = item.code;
  const element = document.getElementById(`add-${code}-button`)!;
  const observable = fromEvent(element, "click");
  return observable;
}

const updateItem = (item: Item): Item => {
  return { ...item, quantity: item.quantity + 1 }; 
}

const updateItemByCode = (code: string) => (item: Item): Item => {
  return item.code === code ? updateItem(item) : item;
}

const addFruit = (state: Array<Item>, code: string) => {
  return state.map(updateItemByCode(code));
}

// [1,2,3], [a,b,c] => [[1,a], [2,b], [3,c]]

export const createObservables = (cart: Array<Item>) => {
  const observables = cart.map(observableFromItem);
  const codes = cart.map((item) => item.code);
  zip(observables, codes)
    .pipe(
      mergeMap(([observable, code]) => {
        return observable.pipe(map(event => code));
      }),
      scan(addFruit, cart),
    )
    .subscribe((data) => {
      render(data);
    });

  const x = ["tomato", "tomato", "apple"]
    .reduce(addFruit, cart);
  console.log(x);
}

const renderButton = (item: Item) => {
  return `<div>
    <button id="add-${item.code}-button">
      ${item.name} 하나 더
    </button>
  </div>`;
}

export const renderButttons = (cart: Array<Item>) => {
  const buttons = document.getElementById("buttons");
  if (buttons === null) {
    return;
  }

  buttons.innerHTML = cart.map(renderButton).join("");
}
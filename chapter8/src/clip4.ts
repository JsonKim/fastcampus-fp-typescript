/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

type Async<A> = (cb: (a: A) => void) => void;

const ns: Array<number> = [1,2,3,4,5];

const integers = (n: number): Array<number> => {
  const ret: Array<number> = [];
  let i = 0;
  while(i < n) {
    i = i + 1;
    ret.push(i);
  }
  return ret;
}

type Iterator<A> = () => A;
type Iterable<A> = () => Iterator<A>;

const integerGenerator = () => {
  let i = 0;
  return () => {
    i = i + 1;
    return i;
  }
}

const promiseIntegers = (n: number): Promise<Array<number>> => new Promise((resolve) => {
  setTimeout(() => {
    resolve(integers(n));
  }, 1000);
});

promiseIntegers(5).then(ns => console.log(ns));

const integerObservable: Async<number> = (ret) => {
  const iter = integerGenerator();
  setInterval(() => {
    ret(iter());
  }, 1000);
};

// integerObservable(n => console.log(n));

const onManyIntegers = (n: number) => {
  const arr = integers(n);
  console.log(arr);
}

const iter = integerGenerator();
const onStep = () => {
  const n = iter();
  console.log(n);
}

const render1 = () => {
  const app1 = document.getElementById("app1");
  if (app1 === null) {
    return;
  }

  app1.innerHTML = `
    <input type="text" id="wanted-number" />
    <button id="all">한 번에 생성</button>
  `;

  const wantedNumber = document.getElementById("wanted-number");
  const btn = document.getElementById("all");

  if (!(wantedNumber && btn)) {
    return;
  } 

  btn.onclick = (e) => {
    onManyIntegers(Number((wantedNumber as HTMLInputElement).value));
  }
}

const render2 = () => {
  const app = document.getElementById("app2");
  if (app === null) {
    return;
  }

  app.innerHTML = `
    <button id="step_1">하나씩 생성 </button>
  `;

  const btn1 = document.getElementById("step_1");

  if (!(btn1)) {
    return;
  } 

  btn1.onclick = (e) => {
    onStep();
  }
}

const render = () => {
  render1();
  render2();
}

export const main = () => {
  render();
}
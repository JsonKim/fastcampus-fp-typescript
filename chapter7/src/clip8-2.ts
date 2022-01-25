/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

// Option<A> = None | Some<A>
// Try<E, A> = Failed<E> | Success<A>
// Async<A> = ???

type Async<A> = (ret: (x: A) => void) => void;

const resolve = <A>(a: A): Async<A> => {
  return (ret) => {
    ret(a);
  }
}

const flatMap = <A, B>(a: Async<A>, f: (a: A) => Async<B>): Async<B> => {
  return (ret) => {
    a((a_) => {
      const b = f(a_);
      b((b_) => ret(b_));
    })
  };
};

const map = <A, B>(a: Async<A>, f: (a: A) => B): Async<B> => {
  return flatMap(a, (a_) => resolve(f(a_)));
};
 
const run = <A>(a: Async<A>) => {
  a(() => { return });
}

const f = (str: string): Promise<number> => new Promise((resolve, reject) => {
  if (str === "") {
    reject("빈 문자열은 입력할 수 없습니다.")
    return;
  }

  setTimeout(() => {
    console.log("f 호출: " + str);
    resolve(str.length * 2);
  }, 500);
});

const g = (n: number): Promise<number> => new Promise((resolve, reject) => {
  if (n === 6) {
    reject("6은 입력할 수 없습니다.");
    return;
  }

  setTimeout(() => {
    console.log("g 호출: " + n);
    resolve(n + 1);
  }, 500);
});
 
const h = (x: number): Promise<boolean> => new Promise((resolve, reject) => {
  if (x === 5) {
    reject("5는 입력할 수 없습니다.");
    return;
  }

  setTimeout(() => {
    console.log("h 호출: " + x);
    resolve(x % 3 === 0);
  }, 500);
});

const handleError = (e: unknown) => {
  // 사용자에게 에러를 알려주는 통합 함수
  console.log("handleError: " + e);
}

const program = (s: boolean) => {
  console.log(s);
}

const greeting = (name: string) => {
  console.log("Hello, " + name);
}

export const main = async () => {
  const a = f("abc");
  const b = a.then(g);
  const c = b.then(h);
  const result = c.then(program);
  result.catch(handleError);

  f("abc").then(g).then(h).then(program).catch(handleError);
 
  greeting("World");
  console.log("프로그램이 종료되었습니다.");
}

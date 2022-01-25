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

const promiseF = (str: string): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promiseF 1: " + str);
  }, 500);

  setTimeout(() => {
    resolve("promiseF 2: " + str);
  }, 1000);
})

const asyncF = (str: string): Async<string> => ((ret) => {
  setTimeout(() => {
    ret("asyncF 1: " + str);
  }, 500);

  setTimeout(() => {
    ret("asyncF 2: " + str);
  }, 1000);
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

export const main = () => {
  run(map(asyncF("test"), (x) => console.log(x))); 
  promiseF("test").then(x => console.log(x)) ;

  greeting("World");
  console.log("프로그램이 종료되었습니다.");
}

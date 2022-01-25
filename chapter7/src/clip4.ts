/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const f = (str: string, ret: (x: number) => void) => {
  setTimeout(() => {
    console.log("f 호출: " + str);
    ret(str.length * 2);
  }, 500);
};

const g = (n: number, ret: (x: number) => void) => {
  setTimeout(() => {
    console.log("g 호출: " + n);
    ret(n + 1);
  }, 500);
};
 
const h = (x: number, ret: (x: boolean) => void) => {
  setTimeout(() => {
    console.log("h 호출: " + x);
    ret(x % 3 === 0);
  }, 500);
};

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
  f("test", (a) => {
    g(a, (b) => {
      h(b, (c) => {
        program(c);
      });
    });
  });
  
  greeting("World");
  console.log("프로그램이 종료되었습니다.");
}
// 숫자를 그대로 돌려주는 함수
export const idNumber = (n: number) => {
  return n;
};

// 문자열을 그대로 돌려주는 함수
export const idString = (s: string) => {
  return s;
};

// boolean값을 그대로 돌려주는 함수
export const idBoolean = (b: boolean) => {
  return b;
};

// 어떤 타입의 값이라도 그대로 돌려주는 함수
export const id = <T>(x: T) => {
  return x;
};

// 주석을 제거하면 에러 발생
// export type T1 = Array;

export type T2 = Array<string>;

export const compose = <A, B, C>(g: (y: B) => C, f: (x: A) => B) => (x: A) => {
  return g(f(x));
};

// compose 함수의 원래 타입
// <A, B, C>(g: (y: B) => C, f: (x: A) => B) => (x: A) => C

// 매개변수를 지워서 단순하게 표기
// <A, B, C>((B) => C, (A) => B) => (A) => C

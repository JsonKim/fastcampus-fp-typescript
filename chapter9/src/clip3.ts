/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */
import * as O from './option';

const compose = <B, C>(g: (b: B) => C) => <A>(f: (a: A) => B) => (a: A): C => g(f(a));

const getLength = (s: string): number => {
  return s.length;
}

const isEven = (n: number): boolean => {
  return n % 2 === 0;
}



export const main = () => {

}

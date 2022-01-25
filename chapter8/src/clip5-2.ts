/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

import { Observable, pipe } from 'rxjs';
import { filter, take } from 'rxjs/operators';

const isEven = (n: number) => n % 2 === 0;

const intergerObservable: Observable<number> = new Observable((subscribe) => {
  let i = 0;
  setInterval(() => {
    i = i + 1;
    subscribe.next(i);
  }, 1000);
});

const ns: Array<number> = [1,2,3,4,5,6,7,8,9,10];

export const main = () => {
  const xs = ns
  // Array<A> ~> (A => boolean) => Array<A>
    .filter(isEven)
    .slice(0, 3);
  console.log(xs);

  const take3EvenNumbers = pipe(
    filter(isEven),
    take(3),
  )

  take3EvenNumbers(intergerObservable).subscribe({
    next: (n) => {
      console.log(n);
    }
  })
}

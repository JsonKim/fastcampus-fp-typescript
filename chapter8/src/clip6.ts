/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

const pipeFunctions = <A, B, C>(f: (a: A) => B, g: (b: B) => C) => (a: A): C => {
  return g(f(a));
}

type Observer<A> = (a: A) => void;
type Observable<A> = (subscribe: Observer<A>) => void;

const map = <A, B>(f: (a: A) => B) => (source: Observable<A>): Observable<B> => {
  return (subscribe) => {
    source(a => {
      const b = f(a);
      subscribe(b);
    })
  }
}

const filter = <A>(pred: (a: A) => boolean) => (source: Observable<A>): Observable<A> => {
  return (subscribe) => {
    source(a => {
      if (pred(a)) {
        subscribe(a);
      }
    })
  }
}

const filterObserver = <A>(pred: (a: A) => boolean) => (subscribe: Observer<A>): Observer<A> => {
  return a => {
    if (pred(a)) {
      subscribe(a);
    }
  }
}

// map :: (A => B) => Array<A> => Array<B>
// mapObserver :: (A => B) => Observer<B> => Observer<A>
const mapObserver = <A, B>(f: (a: A) => B) => (subscribe: Observer<B>): Observer<A> => {
  return a => {
    subscribe(f(a));
  }
}

// map :: (A => B) => Observable<A> => Observable<B>
// lift:: (Observer<B> => Observer<A>) => Observable<A> => Observable<B>
const lift = <A, B>(f: (b: Observer<B>) => Observer<A>) => (source: Observable<A>): Observable<B> => {
  return (subscribe) => {
    source(f(subscribe))
  }
}

const liftedMap = pipeFunctions(mapObserver, lift);
const liftedFilter = pipeFunctions(filterObserver, lift);

export const main = () => {
}
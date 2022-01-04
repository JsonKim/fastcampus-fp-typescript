export type MapType<A, B> = (xs: Array<A>, f: (x: A) => B) => Array<B>;
// (Array<A>, A => B) => Array<B>

export type MapType1 = MapType<number, number>;
// (Array<number>, number => string) => Array<string>

export type Compose<A, B, C> = (g: (y: B) => C, f: (x: A) => B) => (a: A) => C;
// (B => C, A => B) => A => C

export type Compose1 = Compose<string, number, boolean>;
// (number => boolean, string => number) => string => boolean

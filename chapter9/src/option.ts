// 값이 있을수도, 없을수도 있는 자료구조.

export type Some<A> = {
  _tag: "some";
  value: A;
};

export type None = {
  _tag: "none";
};

export type Option<A> = Some<A> | None;

export const some = <A>(value: A): Option<A> => ({ _tag: "some", value });

export const none = (): Option<never> => ({ _tag: "none" });

export const isSome = <A>(oa: Option<A>): oa is Some<A> => oa._tag === "some";

export const isNone = <A>(oa: Option<A>): oa is None => oa._tag === "none";

export const fromUndefined = <A>(a: A | undefined): Option<A> => {
  if (a === undefined) return none();
  return some(a);
};

export const fromNull = <A>(a: A | null): Option<A> => {
  if (a === null) return none();
  return some(a);
};

export const getOrElse = <A>(oa: Option<A>, defaultValue: A): A => {
  // 값이 없으면 지정된 값을 사용하고
  if (isNone(oa)) return defaultValue;
  // 값이 있다면 해당 값을 사용한다.
  return oa.value;
};

export const map = <A, B>(f: (a: A) => B) => (oa: Option<A>): Option<B> => {
  // 값이 없으면 값이 없는 상태를 유지한다.
  if (isNone(oa)) return oa;
  // 값이 있으면 값을 함수에 적용한다.
  return some(f(oa.value));
};

export const mapOrElse = <A, B>(
  oa: Option<A>,
  f: (a: A) => B,
  defaultValue: B
): B => {
  return getOrElse(map(f)(oa), defaultValue);
};

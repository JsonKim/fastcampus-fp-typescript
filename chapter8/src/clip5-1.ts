/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars, no-lone-blocks */

type Async<A> = (ret: (a: A) => void) => void;

// Iterable내의 상태 갱신과 상태를 기반으로 값을 생성하는 함수 
type Iterator<A> = () => A
// 상태를 초기화하고 iterator를 생성하는 함수
type Iterable<A> = () => Iterator<A>

type Observer<A> = (a: A) => void;
type Observable<A> = (subscribe: Observer<A>) => void;

export const main = () => {

}

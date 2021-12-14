/*
토마토: 7000원
오렌지: 15000원
사과: 10000원
*/

export let totalPrice = 0;
totalPrice += 7000;
totalPrice += 15000;
totalPrice += 10000;
// 오렌지가 2개인지, 사과가 3개인지 불분명
totalPrice += 30000;
// 사소한 오타로 인한 실수
totalPrice += 8000;
// 단위가 잘못됐다면 실수라는 것을 인지하기조차 어려움
totalPrice += 70000;

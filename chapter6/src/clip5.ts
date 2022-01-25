console.clear();

const tenDivideBy = (n: number): number => {
  if (n === 0) {
    throw new Error("0으로 나눌 수 없습니다.");
  }
  return 10 / n;
};

const test = () => {
  try {
    // y를 try 블럭 바깥으로 이동시키면 동작이 변경됨.
    const y = tenDivideBy(0);
    return y;
  } catch (e) {
    return 1;
  }
};

export const main = () => {
  const x = test();
  console.log(x);
  console.log("프로그램이 종료 되었습니다.");
};

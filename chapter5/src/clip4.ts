const delivery = (present: string, from: string, to: string) => {
  return `
보내는 물건: ${present}
보내는 사람: ${from}
받는 사람: ${to}
  `;
};

const currying3 = <A, B, C, D>(f: (a: A, b: B, c: C) => D) => (a: A) => (
  b: B
) => (c: C) => f(a, b, c);

const curriedDelivery = currying3(delivery);

export const main = () => {
  console.clear();

  const momsPresent = curriedDelivery("상품권")("엄마");
  console.log(momsPresent("아들"));
};

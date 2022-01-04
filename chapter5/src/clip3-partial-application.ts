const delivery = (present: string, from: string) => (to: string) => {
  return `
보내는 물건: ${present}
보내는 사람: ${from}
받는 사람: ${to}
  `;
};

export const main = () => {
  console.clear();

  const momsPresent = delivery("상품권", "엄마");
  console.log(momsPresent("아들"));
  console.log(momsPresent("딸"));
  console.log(momsPresent("할머니"));
};

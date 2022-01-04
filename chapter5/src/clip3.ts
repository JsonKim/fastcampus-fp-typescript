const delivery = (present: string, from: string, to: string) => {
  return `
보내는 물건: ${present}
보내는 사람: ${from}
받는 사람: ${to}
  `;
};

export const main = () => {
  console.clear();

  console.log(delivery("상품권", "엄마", "아들"));
  console.log(delivery("상품권", "엄마", "딸"));
  console.log(delivery("상품권", "엄마", "할머니"));
};

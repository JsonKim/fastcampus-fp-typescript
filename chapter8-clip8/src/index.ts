import { cart } from "./cart";
import { render } from "./renderList";
import { renderButttons, createObservables } from "./renderButtons";

const main = () => {
  console.clear();

  render(cart);
  renderButttons(cart);
  createObservables(cart);
};

main();

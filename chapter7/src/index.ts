import "./styles.css";

import * as main from './clip8-1';

console.clear();
main.main();

const app = document.getElementById("app");
if (app !== null) {
  app.innerHTML = `
  <h1>Hello Vanilla!</h1>
  <div>
    We use the same configuration as Parcel to bundle this sandbox, you can find more
    info about Parcel 
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  </div>`;
}
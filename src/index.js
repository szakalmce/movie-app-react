import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Root from "./Root";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

import "./index.css";

const theme = {
  colors: {
    black: "#1a1a1a",
    darkGray: "#555",
  },
  fontSizes: {
    huge: "2rem",
    large: "1.375rem",
    normal: "1.125rem",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

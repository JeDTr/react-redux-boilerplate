import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "@hot-loader/react-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import GlobalStyle from "@/styles/global-style";
import Routes from "@/routes";
import { StoresProvider } from "@/mobx/context";

const App = hot(() => (
  <StoresProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </StoresProvider>
));

ReactDOM.render(<App />, document.getElementById("app"));

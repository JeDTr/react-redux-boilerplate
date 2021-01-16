import "core-js/stable";
import "regenerator-runtime/runtime";
import { hot } from "react-hot-loader/root";
import React from 'react'
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "@/styles/theme";
import GlobalStyle from "@/styles/global-style";

const App = hot(() => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
})

ReactDOM.render(<App />, document.getElementById("app"));

import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import ReactDOM from "react-dom";
import { App } from "./components/App";
import "./index.css";
import { theme } from "./constans/index";


const container = document.getElementById("root");
const root = createRoot(container!); 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

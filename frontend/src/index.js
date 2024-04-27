import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import AuthMiddleware from "./utils/authMiddleware"; // Assuming AuthMiddleware is exported as a default component
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <AuthMiddleware>
          <App />
        </AuthMiddleware>
      </CookiesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

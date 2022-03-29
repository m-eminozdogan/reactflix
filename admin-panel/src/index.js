import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

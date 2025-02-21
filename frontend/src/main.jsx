import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <ToastContainer
      pauseOnHover
      draggable
      className="!mt-22 !mx-5 !w-[90%] xl:w-full"
    />
  </React.StrictMode>
);

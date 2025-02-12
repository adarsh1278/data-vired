import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Providers } from "./redux/provider.tsx";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/fontawesome/font-awesome.css";
import "./styles/fontawesome/themify-icons.css";
import "./styles/css/style.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
      <ToastContainer />
    </Providers>
  </React.StrictMode>
);

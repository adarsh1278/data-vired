"use client";
import  "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import './globals.css'
import "swiper/css";
import "../styles/fontawesome/font-awesome.css";
import "../styles/fontawesome/themify-icons.css";
import "../styles/css/style.css";
import { useEffect, useState } from "react";
import store from "@/redux/store";


export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
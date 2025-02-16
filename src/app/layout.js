"use client";


import "./globals.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

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
      <body className={`antialiased`}>
        <Provider store={store}>
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
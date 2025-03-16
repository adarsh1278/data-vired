'use client'
import { ReactNode } from "react";
import HeaderSection from "../header/HeaderSection";
import FooterSection from "../footer/FooterSection";
import FooterCopyright from "../footer/FooterCopyright";

const Layout = ({ children }) => {
  return (
    <>

      <HeaderSection />

      {children}
      <FooterSection />
      <FooterCopyright />
    </>
  );
};

export default Layout;

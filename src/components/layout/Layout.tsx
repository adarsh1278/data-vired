 'use client'
import { ReactNode } from "react";
 
import HeaderSection from "../header/HeaderSection";
 
import FooterSection from "../footer/FooterSection";
 
import FooterCopyright from "../footer/FooterCopyright";
type Props = {
  children: ReactNode;
};
const Layout = ({ children }: Props) => {
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

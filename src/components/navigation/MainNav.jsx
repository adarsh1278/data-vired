'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

const MainNav = ({ mobileMenuOpen }) => {
  const [activeNav, setActiveNav] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = (nav) => {
    if (isMobile) {
      setActiveNav((prevNav) => (prevNav === nav ? "" : nav));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="main-menu" className={mobileMenuOpen ? "show" : " w-full flex justify-end"}>
      <ul className="main-nav-items ">

        <li><Link href="/about" className="  text-[##80879F]">About</Link></li>
        <li><Link href="/about">Carrier Service</Link></li>
        <li><Link href="/about">Webinar</Link></li>
        <li><Link href="/about">Blog</Link></li>
        <li><Link href="/about">Contact us</Link></li>




      </ul>
    </nav>
  );
};
//THIS IS A PULL REQUEST 
export default MainNav;

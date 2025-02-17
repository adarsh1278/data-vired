'use client'
import { useEffect, useRef, useState } from "react";
import MainNav from "../navigation/MainNav";
import Link from "next/link";

const HeaderSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const openSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="navigation" className="navbar-light bg-faded site-navigation">
      <div className="container-fluid">
        <div className="row" ref={sidebarRef}>
          <div className="col-20 align-self-center header-logo-container">
            <div className="site-logo">
              <Link href="/">
                <img src="/assets/img/logo.png" alt="logo" />
              </Link>
            </div>
          </div>

          <div className="col-60 d-flex justify-content-end justify-content-lg-center nav-section">
            <MainNav mobileMenuOpen={isSidebarOpen} />
            <div
              id="nav-icon3"
              role="button"
              onClick={openSidebar}
              className={isSidebarOpen ? "open" : ""}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="col-20 d-none d-lg-block text-end align-self-center header-action-container">
            <Link href="/Signinpage" className="header-btn">
              Sign In
            </Link>
            <Link href="/Signuppage" className="btn_one">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

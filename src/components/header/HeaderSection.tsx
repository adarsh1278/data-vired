import { useEffect, useRef, useState } from "react";
import MainNav from "../navigation/MainNav";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const openSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
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
              <Link to="/">
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
            <Link to="/sign-in" className="header-btn">
              Sign In
            </Link>
            <Link to="/sign-up" className="btn_one">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;

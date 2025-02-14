 'use client'
import { useEffect, useState } from "react";
 
import { Link } from "react-router-dom";
type Props = {
  mobileMenuOpen: boolean;
};
const MainNav = ({ mobileMenuOpen }: Props) => {
  const [activeNav, setActiveNav] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = (nav: string) => {
    if (isMobile) {
      setActiveNav((prevNav) => (prevNav === nav ? "" : nav));
    } else {
      return;
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav id="main-menu" className={mobileMenuOpen ? "show" : ""}>
      <ul className="main-nav-items">
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("home")}
        >
          <a>Home</a>
          <ul
            className={`subdropdown-menu ${activeNav === "home" ? "show" : ""}`}
          >
            <li>
              <Link to="/">Home 01</Link>
            </li>
            <li>
              <Link to="/home-2">Home 02</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("course")}
        >
          <a>Course</a>
          <ul
            className={`subdropdown-menu ${
              activeNav === "course" ? "show" : ""
            }`}
          >
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/course/complete-html-css-and-javascript-course">
                Course Details
              </Link>
            </li>
          </ul>
        </li>
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("pages")}
        >
          <a>Pages</a>
          <ul
            className={`subdropdown-menu ${
              activeNav === "pages" ? "show" : ""
            }`}
          >
            <li>
              <Link to="/instructor">Instructor</Link>
            </li>
            <li>
              <Link to="/instructor/liam-johnson">Instructor Details</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing Plan</Link>
            </li>
            <li>
              <Link to="/faq">Faq Page</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </li>
        <li
          className="menu-item-has-children"
          role="button"
          onClick={() => toggleNav("blog")}
        >
          <a>Blog</a>
          <ul
            className={`subdropdown-menu ${activeNav === "blog" ? "show" : ""}`}
          >
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog/professional-mobile-painting-and-sculpting">
                Blog Details
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;

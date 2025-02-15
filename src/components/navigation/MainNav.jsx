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
    handleResize(); // Check on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="main-menu" className={mobileMenuOpen ? "show" : ""}>
      <ul className="main-nav-items">
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("home")}>
          <a>Home</a>
          <ul className={`subdropdown-menu ${activeNav === "home" ? "show" : ""}`}>
            <li><Link href="/">Home 01</Link></li>
            <li><Link href="/home-2">Home 02</Link></li>
          </ul>
        </li>
        <li><Link href="/about">About</Link></li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("course")}>
          <a>Course</a>
          <ul className={`subdropdown-menu ${activeNav === "course" ? "show" : ""}`}>
            <li><Link href="/course">Course</Link></li>
            <li><Link href="/course/complete-html-css-and-javascript-course">Course Details</Link></li>
          </ul>
        </li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("pages")}>
          <a>Pages</a>
          <ul className={`subdropdown-menu ${activeNav === "pages" ? "show" : ""}`}>
            <li><Link href="/instructor">Instructor</Link></li>
            <li><Link href="/instructor/liam-johnson">Instructor Details</Link></li>
            <li><Link href="/pricing">Pricing Plan</Link></li>
            <li><Link href="/faq">Faq Page</Link></li>
            <li><Link href="/sign-in">Sign In</Link></li>
            <li><Link href="/sign-up">Sign Up</Link></li>
          </ul>
        </li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("blog")}>
          <a>Blog</a>
          <ul className={`subdropdown-menu ${activeNav === "blog" ? "show" : ""}`}>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/blog/professional-mobile-painting-and-sculpting">Blog Details</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default MainNav;

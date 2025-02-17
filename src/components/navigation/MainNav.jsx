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
    <nav id="main-menu" className={mobileMenuOpen ? "show" : ""}>
      <ul className="main-nav-items">
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("home")}>
          <a>Home</a>
          <ul className={`subdropdown-menu ${activeNav === "home" ? "show" : ""}`}>
            <li><Link href="/Home1">Home 01</Link></li>
            <li><Link href="/Home2">Home 02</Link></li>
          </ul>
        </li>
        <li><Link href="/about">About</Link></li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("course")}>
          <a>Course</a>
          <ul className={`subdropdown-menu ${activeNav === "course" ? "show" : ""}`}>
            <li><Link href="/Course">Course</Link></li>
            <li><Link href="/CourseDetail">Course Details</Link></li>
          </ul>
        </li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("pages")}>
          <a>Pages</a>
          <ul className={`subdropdown-menu ${activeNav === "pages" ? "show" : ""}`}>
            <li><Link href="/Instruction">Instructor</Link></li>
            <li><Link href="/Instructionpage">Instructor Details</Link></li>
            <li><Link href="/Pricingpage">Pricing Plan</Link></li>
            <li><Link href="/Faq">Faq Page</Link></li>
            <li><Link href="/signinpage">Sign In</Link></li>
            <li><Link href="/signuppage">Sign Up</Link></li>
          </ul>
        </li>
        <li className="menu-item-has-children" role="button" onClick={() => toggleNav("blog")}>
          <a>Blog</a>
          <ul className={`subdropdown-menu ${activeNav === "blog" ? "show" : ""}`}>
            <li><Link href="/BlogDetails">Blog</Link></li>
            <li><Link href="/Blogpage">Blog Details</Link></li>
          </ul>
        </li>
        <li><Link href="/ContactPage">Contact</Link></li>
      </ul>
    </nav>
  );
};
//THIS IS A PULL REQUEST 
export default MainNav;

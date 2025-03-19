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
    <>

      <div className=" w-full h-full  flex flex-col ">


        <div id="navigation" className="navbar-light bg-faded site-navigation">

          <div className="container-fluid">
            <div className="row" ref={sidebarRef}>
              <div className="col-20 align-self-center header-logo-container">
                <div className={`  w-fit flex    flex-row-reverse  `}>
                  <h2 className=" ml-2 bg-[#FF922E] px-6 py-2  text-center  w-fit h-fit  mt-1 rounded-md text-white  text-xl">

                    Programs
                  </h2>
                  <Link href="/">
                    <img src="/svg.svg" alt="logo" />
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

                <div className=" w-full flex justify-end">
                  <Link href="/Signuppage" >
                    <h2 className=" ml-2 bg-[#FF922E] px-6 w-fit  text-center py-2 rounded-md text-white  text-xl">

                      Apply Now
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;

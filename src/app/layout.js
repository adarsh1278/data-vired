"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import './globals.css';
import "swiper/css";
import "../styles/fontawesome/font-awesome.css";
import "../styles/fontawesome/themify-icons.css";
import "../styles/css/style.css";
import { useEffect, useState } from "react";
import store from "@/redux/store";
import HeaderSection from "@/components/header/HeaderSection";

// Scroll to Top Component
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top-btn ${showButton ? 'visible' : ''}`}
      aria-label="Scroll to top"
    >
      <i className="fa fa-arrow-up"></i>
    </button>
  );
};

export default function RootLayout({ children }) {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);

  //   // Enable smooth scrolling
  //   document.documentElement.style.scrollBehavior = 'smooth';

  //   // Handle anchor link clicks
  //   const handleAnchorClick = (e) => {
  //     const href = e.target.closest('a')?.getAttribute('href');
  //     if (href?.startsWith('#')) {
  //       e.preventDefault();
  //       const element = document.querySelector(href);
  //       if (element) {
  //         element.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     }
  //   };

  //   document.addEventListener('click', handleAnchorClick);

  //   return () => {
  //     document.documentElement.style.scrollBehavior = 'auto';
  //     document.removeEventListener('click', handleAnchorClick);
  //   };
  // }, []);

  // if (!isClient) {
  //   return null;
  // }

  return (
    <html lang="en">
      <body>
   
        <Provider store={store}>
       
          <ToastContainer />
        
          <div className=" w-full  h-fit">
            <div className=" w-full h-[40px]  fixed  top-0 bg-white z-[999] ">
              <div className=" w-full h-full  flex flex-row  justify-center items-center">
             <div className=" w-fit h-[30px]  flex flex-row ">
             <div className="flex items-center px-3 mr-4">
        <span className="text-sm text-gray-700">WhatsApp no: XXXXXXXX</span>
      </div>
      <button className="  ml-6 px-3 w-fit   rounded-md  h-full    text-center text-xs font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors">
         Request Callback
      </button>
             </div>

              </div>
            </div>
         <HeaderSection/>
            
           

         
   
         
            {children}
          </div>
          {/* <ScrollToTop /> */}
        </Provider>
      </body>
    </html>
  );
}
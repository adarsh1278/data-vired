'use client'
import Link from "next/link";


const BreadCrumbSection = ({ currentPage, headerText }) => {
  return (
    <section className="section-top">
      <div className="container">
        <div className="text-center col-lg-10 offset-lg-1">
          <div className="section-top-title">
            <h1>{headerText ? headerText : currentPage}</h1>
            <ul>
              <li>
                <Link href="/">Home </Link>
              </li>
              <li className="ms-1"> / {currentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbSection;

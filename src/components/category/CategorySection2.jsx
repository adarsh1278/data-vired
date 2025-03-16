'use client'
import DivAnimateY from "../utils/DivAnimateY";

const CategorySection2 = () => {
  return (
    <section
      className="overflow-hidden top_cat__area section-padding bg-[#403685] text-white"
      style={{
        // backgroundImage: "url(assets/img/bg/section-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "#403685",
      }}
    >
      <DivAnimateY className="container">
        <div className="text-center section-title">
          <h2 className=" text-white">Multinational Hiring Partner</h2>
          <p>
            We ofkr a brand new spprcech to thes moet basic jearring from a wide reange of leariing experiance
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="cat_list">
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/img/e1.png" alt="category-image" /> Digital
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e2.png" alt="category-image" /> UI/UX
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e3.png" alt="category-image" /> 3D
                    Visual Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e4.png" alt="category-image" /> Content
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e5.png" alt="category-image" />{" "}
                    Photography
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e6.png" alt="category-image" /> Photo
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e7.png" alt="category-image" /> Art &
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e8.png" alt="category-image" /> Finance
                    & Banking
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e9.png" alt="category-image" /> Graphic
                    Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e2.png" alt="category-image" />{" "}
                    Interior Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e3.png" alt="category-image" /> 3D
                    Visual Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="assets/img/e7.png" alt="category-image" /> Art &
                    Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default CategorySection2;

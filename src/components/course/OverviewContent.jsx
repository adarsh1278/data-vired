'use client'
const OverviewContent = () => {
  return (
    <div className="overview">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <iframe
        width="900"
        height="506"
        src="https://www.youtube.com/embed/RXv_uIN6e-Y"
        title="10 Excel Formula used daily at WORK (Excel formula for job interview)"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        roin et eros varius, ornare turpis ac, dapibus nisi. Morbi luctus arcu
        non massa consequat, et tristique velit semper. Curabitur interdum
        vulputate sagittis. Donec erat massa, tincidunt sed feugiat id, suscipit
        in est. Proin laoreet orci quis augue eleifend varius. Donec hendrerit
        ex ut lacus blandit euismod.{" "}
      </p>
      <div className="details-buttons-area">
        <a href="#0" className="custom-button theme-one">
          Enroll Now <i className="fa fa-angle-right"></i>
        </a>
        <a href="#0" className="bg-white custom-button">
          get membership
        </a>
        <ul className="social-icons">
          <li>
            <a href="#0" className="active">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewContent;

const InstructorContent = () => {
  return (
    <div className="overview text-center">
      <div className="instructor-item">
        <div className="instructor-thumb">
          <a href="#0">
            <img src="/assets/img/ins-details.png" alt="instructor" />
          </a>
        </div>
        <div className="instructor-content">
          <h6 className="title">
            <a href="#0">Manuel Nuer</a>
          </h6>
          <span className="details">TEACHER</span>
        </div>
      </div>
      <p>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur..
      </p>
      <div className="details-buttons-area">
        <ul className="social-icons justify-content-center w-100">
          <li>
            <a href="#0">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#0" className="active">
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

export default InstructorContent;

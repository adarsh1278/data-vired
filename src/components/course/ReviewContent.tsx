const ReviewContent = () => {
  return (
    <div className="client-review">
      <div className="review-comments">
        <h6 className="review-title">Reviews (03)</h6>
        <ul className="review-contents">
          <li>
            <div className="thumb">
              <img src="/assets/img/client04.png" alt="course" />
            </div>
            <div className="cont">
              <h6 className="subtitle">Robot Smith</h6>
              <div className="ratings cl-theme">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                unde et culpa voluptatibus repellat voluptates aliquid minima
              </p>
            </div>
          </li>
          <li>
            <div className="thumb">
              <img src="/assets/img/client02.png" alt="course" />
            </div>
            <div className="cont">
              <h6 className="subtitle">Nicolas Anelca</h6>
              <div className="ratings cl-theme">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span className="cl-theme-light">
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                unde et culpa voluptatibus repellat voluptates aliquid minima
              </p>
            </div>
          </li>
          <li>
            <div className="thumb">
              <img src="/assets/img/client03.png" alt="course" />
            </div>
            <div className="cont">
              <h6 className="subtitle">Harry Johnshon</h6>
              <div className="ratings cl-theme">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                unde et culpa voluptatibus repellat voluptates aliquid minima
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="review-form">
        <h6 className="review-title">Add a Review</h6>
        <form className="row client-form align-items-center">
          <div className="col-md-4 col-12">
            <input type="text" name="name" placeholder="Full Name" />
          </div>
          <div className="col-md-4 col-12">
            <input type="text" name="email" placeholder="Email Adress" />
          </div>
          <div className="col-md-4 col-12">
            <div className="rating">
              <span className="rating-title">Your Rating : </span>
              <ul className="ratings">
                <li>
                  <a href="#0" title="Give Me One Star">
                    <i className="fa fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" title="Give Me Two Star">
                    <i className="fa fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" title="Give Me Three Star">
                    <i className="fa fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" title="Give Me Four Star">
                    <i className="fa fa-star"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" title="Give Me Five Star">
                    <i className="fa fa-star"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-12 d-inline-flex">
            <textarea rows={5} placeholder="Type Here Message"></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="custom-button rounded">
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewContent;

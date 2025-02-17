import AuthForm from "../form/AuthForm";
import DivAnimateY from "../utils/DivAnimateY";


const AuthSection = ({ login }) => {
  return (
    <section className="ar-account-form-section section-padding">
      <DivAnimateY className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="auth-container">
              <h3 className="single-form-title">
                {login ? "Sign in" : "Sign Up"}
              </h3>
              <AuthForm login={login} />
              <div className="other-option">
                <p>Or continue with</p>
                <div className="social-box d-flex justify-content-center gap-20">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default AuthSection;
'use client'
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify";

const AuthForm = ({ login }) => {
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success(`${login ? "Logged In" : "Registered"} successfully!`);

    // Reset the form to default values
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="login-username"
        placeholder="Username"
        type="text"
        {...register("name")}
        required
      />
      {!login && (
        <input
          id="register-email"
          placeholder="Email Address"
          type="email"
          {...register("email")}
          required
        />
      )}
      <input
        id="login-password"
        placeholder="Password"
        type="password"
        {...register("password")}
        required
      />
      {!login && (
        <input
          id="repeat-password"
          placeholder="Repeat Password"
          type="password"
          {...register("repeatPassword")}
          required
        />
      )}
      <div className="sign-in-checkbox-container d-flex justify-content-between align-items-center">
        {login && (
          <div className="stay-sign-in">
            <input
              id="sign-in-checkbox"
              type="checkbox"
              name="sign-in-checkbox"
              className="w-auto"
            />
            <label htmlFor="sign-in-checkbox">Stay Logged in</label>
          </div>
        )}
        {login ? (
          <a className="password-recovery-btn" href="#">
            Forgot Your Password?
          </a>
        ) : (
          <div className="alternative-auth">
            <Link className="direct-to-login" to="/login">
              Click to Sign in
            </Link>
          </div>
        )}
      </div>
      <button type="submit" className="ar-1-banner-btn single-form-btn">
        {login ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
};

export default AuthForm;

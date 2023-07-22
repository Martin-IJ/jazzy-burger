import React, { useState } from "react";
import mobileImg from "./assets/header/image 4.png";
import "./styles/signup.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === "email") {
      if (!value.includes("@") || !value.includes(".com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email format*",
        }));
      }
    }
  };

  const { email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for errors
    if (email.length === 0) {
      newErrors.email = "Required*";
    }

    if (password.length < 8) {
      newErrors.password = "Enter Your Password";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform your form submission logic here
      // console.log(user);
    }
  };

  return (
    <div className="form-container col-12 pt-4 col-md-8 offset-md-2 col-lg-4 offset-lg-4">
      <div className="first text-center mt-1">
        <img
          className="mb-4 signup-logo"
          src={mobileImg}
          alt=""
          height={120}
          onClick={() => navigate("/")}
        />
        <h2 className="create mb-5">Sign in to your account</h2>
      </div>
      <div className="cont col-md-10 col-10 offset-1 offset-md-1">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="label d-block" htmlFor="">
              Email
            </label>
            <input
              className={`form-control ${errors.email ? "error" : ""}`}
              type="text"
              id="email"
              name="email"
              placeholder="example@mail.com"
              value={email}
              onChange={handleChange}
            />
            {errors.email && (
              <label className="label1 text-danger">{errors.email}</label>
            )}
          </div>
          <div className="mb-3 login">
            <label className="label d-block" htmlFor="">
              Password
            </label>
            <input
              className={`form-control ${errors.password ? "error" : ""}`}
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />

            <button
              className="btn-password"
              onClick={handleTogglePassword}
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              <i
                className={`fa fa-sharp fa-light ${
                  passwordVisible ? "fa-eye" : "fa-eye-slash"
                }`}
              ></i>
            </button>
          </div>
          <div className="er">
            {errors.password && (
              <label className="label3 text-danger">{errors.password}</label>
            )}
          </div>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="align-items-center">
              <input type="checkbox" id="sign" />
              <label htmlFor="sign" className="sign fs-6 fw-lighter">
                Keep me signed in
              </label>
            </div>
            <label>
              <a href="#" className="reset-password fs-6 fw-lighter">
                Reset Password
              </a>
            </label>
          </div>

          <div className="btn1 text-center  mt-4">
            <button className="btn-create">Sign In</button>
          </div>
        </form>
      </div>

      <div className="foot p-2 text-center ">
        <p className="fs-6 fw-lighter">
          Dont have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")} className="ms-5">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};
export default Login;

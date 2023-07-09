import React from "react";
import LoginImg from "../assets/login.svg";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInfo = {
      email: data.get("email"),
      password: data.get("password"),
      username: data.get("username"),
    };
    login(userInfo, navigate('/profile'));
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="shadow-lg p-4">
            <h1 className="fs-1 display-1 mb-5">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <p className="mb-1">Username:</p>
                <input type="text" />
              </div>
              <div className="mb-4">
                <p className="mb-1">Email:</p>
                <input
                  type="text"
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </div>
              <div className="mb-4">
                <p className="mb-1">Password:</p>
                <input
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </div>
              <div className="mb-4">
                <button type="submit" className="btn button-lr">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-6 ">
          <img src={LoginImg} alt="UVA Login" width={450} className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Login;

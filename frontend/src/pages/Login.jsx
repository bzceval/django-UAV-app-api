import React from "react";
import login from "../assets/login.svg";

const Login = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="shadow-lg p-4">
            <h1 className="fs-1 display-1 mb-5">Login</h1>
            <div className="mb-4">
              <p className="mb-1">Username:</p>
              <input type="text" />
            </div>
            <div className="mb-4">
              <p className="mb-1">Email:</p>
              <input type="text" />
            </div>
            <div className="mb-4">
              <p className="mb-1">Password:</p>
              <input type="text" />
            </div>
            <div className="mb-4">
              <div className="btn button-lr">Login</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 ">
          <img src={login} alt="UVA Login" width={450} className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default Login;

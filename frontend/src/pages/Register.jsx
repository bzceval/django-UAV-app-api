import React from "react";
import register from "../assets/register.svg";

const Register = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <img src={register} alt="UVA Register" width={500} className="mt-5" />
        </div>
        <div className="col-12 col-md-6">
          <div className="shadow-lg p-4">
            <h1 className="fs-1 display-1 mb-5">Register</h1>
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
              <div className="btn button-lr">Register</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

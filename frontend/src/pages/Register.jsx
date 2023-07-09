import React, { useState } from "react";
import register from "../assets/register.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    fetch("http://127.0.0.1:8000/user/create/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // İsteğin başarıyla tamamlandığı durum
        console.log(data);
      })
      .catch((error) => {
        // İstek sırasında bir hata oluştu
        console.error(error);
      });
  };

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
              <p className="mb-1">First Name:</p>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="mb-1">Last Name:</p>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="mb-1">Username:</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="mb-1">Email:</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p className="mb-1">Password:</p>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="check form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Active Account
                </label>
                *
              </div>
            </div>
            <div className="mb-4">
              <div className="btn button-lr" onClick={handleRegister}>
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

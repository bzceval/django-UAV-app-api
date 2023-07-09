import React from "react";
import RegisterImg from "../assets/register.svg";
import * as Yup from "yup";
import { Formik, ErrorMessage, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is mandatory"),
  password: Yup.string()
    .required("Password is mandatory")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const Register = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <img
            src={RegisterImg}
            alt="UVA Register"
            width={500} 
          />
        </div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            actions.setSubmitting(false);
            console.log(values);
            register({ values }, navigate);
          }}
        >
          {({ values, handleChange, errors, touched, handleBlur }) => (
            <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
              <div className="shadow-lg w-100 p-4">
                <h1 className="fs-1 display-1 mb-5">Register</h1>
                <Form>
                  <div className="mb-4">
                    <p className="mb-1">First Name:</p>
                    <input
                      type="text"
                      required
                      name="firstname"
                      id="firstname"
                      label="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-4">
                    <p className="mb-1">Last Name:</p>
                    <input
                      type="text"
                      required
                      name="lastname"
                      id="lastname"
                      label="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-4">
                    <p className="mb-1">Username:</p>
                    <input
                      type="text"
                      required
                      name="username"
                      id="username"
                      label="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="mb-4">
                    <p className="mb-1">Email:</p>
                    <input
                      required
                      type="email"
                      id="email"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helpertext={touched.email && errors.email}
                      error={touched.email && Boolean(errors.email)}
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className="mb-4">
                    <p className="mb-1">Password:</p>
                    <input
                      required
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helpertext={touched.password && errors.password}
                      error={
                        touched.password && Boolean(errors.password)
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <button className="btn button-lr" type="submit">
                      Register
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;

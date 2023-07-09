import React from "react";
import { Link, NavLink } from "react-router-dom";
import uav from "../assets/uav.png";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { state, logout } = useAuthContext();
  const currentUser = state && state.currentUser;

  return (
    <header className="py-4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
          <NavLink to="/">
            <img src={uav} alt="UAV" width={70} />
          </NavLink>
          <div className="col-12 col-lg-auto mx-auto d-flex justify-content-center mt-3">
            <NavLink to="/" className="nav-link px-4">
              UAV's
            </NavLink>
            <NavLink to="/search-uav" className="nav-link px-4">
              Explore UAV
            </NavLink>
          </div>
          <div className="mt-2">
            {currentUser ? (
              <div className="d-flex flex-row gap-3">
                <p className="mt-1">{currentUser}</p>
                <Link to={logout} className="button">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="d-flex gap-3">
                <Link to="/login" className="button">
                  Login
                </Link>
                <Link to="/register" className="button">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import uav from "../assets/uav.png";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { state, logout } = useAuthContext();
  const navigate = useNavigate();

  const currentUser = state && (state.currentUser || state.token);
  console.log("NAVBAR SRATE", state);
  const handleLogout = () => {
    logout(navigate);
  };

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
                <button onClick={handleLogout} className="button">
                  Logout
                </button>
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

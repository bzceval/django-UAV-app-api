import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import UAV from "../pages/UAV";
import UAVDetail from "../pages/UAVDetail";
import FindUAV from "../pages/FindUAV";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import Profile from "../pages/Profile";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UAV />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="/detail/:id" element={<PrivateRouter />}>
          <Route path="" element={<UAVDetail />} />
        </Route>
        <Route path="/search-uav" element={<FindUAV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

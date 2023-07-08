import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import UAV from "../pages/UAV";
import UAVDetail from "../pages/UAVDetail";
import FindUAV from "../pages/FindUAV";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<UAV />} />
        <Route path="/detail" element={<UAVDetail />} />
        <Route path="/search-uav" element={<FindUAV />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

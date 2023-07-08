import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import UAV from "../pages/UAV";
import UAVDetail from "../pages/UAVDetail";
import FindUAV from "../pages/FindUAV";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<UAV />} />
        <Route path="/detail" element={<UAVDetail />} />
        <Route path="/search-uav" element={<FindUAV />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

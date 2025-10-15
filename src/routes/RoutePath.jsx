import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Hero/Home";
import AddEmp from "../components/addEmp/AddEmp";
import UpdateEmp from "../components/updateEmp/UpdateEmp";
import AboutUs from "../components/aboutUs/AboutUs";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addEmp" element={<AddEmp />} />
      <Route path="/updateEmp" element={<UpdateEmp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <div className="text-center mt-10 text-red-500 text-2xl">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
}





import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import ResetPassword from "./Pages/ResetPassword";
import CreateHall from "./Pages/CreateHall";
import Bookings from "./Pages/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createhall" element={<CreateHall />} />
        <Route path="/bookings" element={<Bookings/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

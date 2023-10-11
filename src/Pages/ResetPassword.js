import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleReset = () => {
    if (password === confirmPassword) {
      axios
        .post("http://localhost:4000/hallbooking/reseetPassword", {
          password,
          token: localStorage.getItem("token"),
        })
        .then((res) => {
          if (res.data.status) {
            alert(res.data.message);
            navigate("/home")
          } else {
            alert(res.data.message);
          }
        });
    } else {
      alert("Please Enter Both Password Same");
    }
  };

  return (
    <div className="main">
      <div className="nav-bar-1 py-2">
        <h6 className="ps-3 pt-2 pb-3 d-inline">
          India's Favourite Wedding Planning Platform
        </h6>
        <select className="drop ms-4">
          <option>TamilNadu</option>
        </select>
      </div>

      <div className="nav-bar-2">
        <div className="row py-3">
          <div className="col-6">
            <h3 className="nav-bar ps-3">Varun's Bookings</h3>
          </div>
        </div>
      </div>

      <div className="login ">
        <h3 className="mt-4 text-center">Forgot Password - We will Help you</h3>
        <input
          type="text"
          placeholder="Password"
          className="d-block mt-5 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className="d-block mt-5 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          className="btn btn-success mt-5 ms-5 mb-2"
          onClick={handleReset}
        >
          Reset the Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

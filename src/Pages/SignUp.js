import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="main">
      <div className="nav-bar-1 py-2">
        <h6 className="ps-3 pt-2 pb-3  d-inline">
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
        <h3 className="mt-4 text-center">Create Your account with US❤</h3>
        <input
          type="text"
          placeholder="Name*"
          className="d-block mt-5 ms-5 w-75 py-2 ps-3"
        />
        <input
          type="text"
          placeholder="Email*"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
        />

        <input
          type="text"
          placeholder="Password*"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
        />
        <Link to="/">
          <button className="btn btn-success mt-5 ms-5 mb-3">
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

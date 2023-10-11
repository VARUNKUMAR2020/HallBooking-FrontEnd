import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = () => {
    axios
      .post("http://localhost:4000/hallbooking/create", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.data.status) {
          alert(res.data.message);
          localStorage.setItem("token", res.data.data);
          navigate('/home')
        } else {
          alert(res.data.message);
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email*"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Password*"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="">
          <button
            className="btn btn-success mt-5 ms-5 mb-3"
            onClick={handleCreate}
          >
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

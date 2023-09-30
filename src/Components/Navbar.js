import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
         <div className="col-6 fs-5 text-center">
          <Link to="/" className="link text-decoration-none ps-4 pe-4"></Link>
          <Link to="/" className="link text-decoration-none ps-4 pe-4">Create Hall</Link>
          <Link to="/" className="link text-decoration-none ps-4 pe-4">Book Hall</Link>
          <Link to="/" className="link text-decoration-none ps-4 pe-4">All Bookings</Link>
          <button className="btn btn-danger">LOGOUT</button>
         </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;

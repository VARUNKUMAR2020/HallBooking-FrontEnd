import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Bookings = () => {
  const [booked, setBooked] = useState([]);

  console.log(booked);

  useEffect(() => {
    axios
      .post("https://hall-booking-backend-mern.onrender.com/hallbooking/bookedhall", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        if (res.data.status) {
          alert(res.data.message);
          setBooked(res.data.data)
        } else {
          alert(res.data.message);
        }
      });
  },[]);

  return (
    <div>
      <Navbar />
      <div>
        <table className="table table-dark table-striped text-center ">
          <thead>
            <tr>
              <th>HALL NAME</th>
              <th>HALL DESCRIPTION</th>
              <th>HALL BOOKED MAIL-ID</th>
            </tr>
          </thead>
          <tbody>
            {booked.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                <td>{book.description}</td>
                <td>{book.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;

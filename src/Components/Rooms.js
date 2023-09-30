import React from "react";
import halls from "../Data/Hall.json";

const Rooms = () => {
    const handleBook=()=>{
        alert("Booked Successfully");
    }
  return (
    <div className="container mt-5">
      <h3 className="text-center">Book the hall to start a New Life</h3>
      <div className="row mt-5">
        {halls.map((hall, index) => (
          <div className="col-md-4 mt-4" key={index}>
            <div className="card">
              <img
                src={hall.img}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{hall.name}</h5>
                <p className="card-text">
                  {hall.description}
                </p>
                <h6>RATING : {hall.rating}</h6>
                <button className="btn btn-success" onClick={handleBook}>Book now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;

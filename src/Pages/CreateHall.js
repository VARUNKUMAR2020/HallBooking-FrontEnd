import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hall from "../Data/Hall.json";
import { useNavigate } from "react-router-dom";

const CreateHall = () => {
    const navigate = useNavigate();
  const [hall, setHall] = useState({ name: "", img: "", description: "" });

  const handleCreate = () => {
    Hall.push(hall);
    alert("Hall Created Successfully ");
    navigate("/home");
  };

  return (
    <div>
      <Navbar />

      <div className="login ">
        <h3 className="mt-4 text-center">
          Create Your Hall To Serve The Happiness ❤
        </h3>
        <input
          type="text"
          placeholder="Name of the Hall *"
          className="d-block mt-5 ms-5 w-75 py-2 ps-3"
          onChange={(e) => {
            setHall({ ...hall, name: e.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Link of the Image"
          className="d-inline mt-4 ms-5 w-25 py-2 ps-3"
          onChange={(e) => {
            setHall({ ...hall, img: e.target.value });
          }}
        />
        <span className="mx-4">OR</span>
        <input type="File" className="mt-4 py-2 ps-3" />

        <input
          type="text"
          placeholder="Description *"
          className="d-block mt-4 ms-5 w-75 py-2 ps-3"
          onChange={(e) => {
            setHall({ ...hall, description: e.target.value });
          }}
        />
        <button
          className="btn btn-success mt-5 ms-5 mb-4"
          onClick={handleCreate}
        >
          Create Hall
        </button>
      </div>
    </div>
  );
};

export default CreateHall;

import React from "react";
import "./Appoinment.css";
import fifth from "../../images/fifth.png";

const Appoinment = () => {
  return (
    <div className="container py-5 mt-4">
      <div className="make-appoinment">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={fifth} alt="doctor-img" />
          </div>
          <div className="col-md-7 mt-5 side-text text-white">
            <h6 style={{ color: "#1CC7C1" }}>APPOINMENT</h6>
            <h2>
              Make an appoinment <br /> today
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, pariatur.
              <br />
              Lorem ipsum dolor sit amet.
            </p>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#1CC7C1", borderColor: "#1CC7C1" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;

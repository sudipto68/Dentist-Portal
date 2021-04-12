import React from "react";
import chair from "../../images/chair.png";

const HeaderMain = () => {
  return (
    <main>
      <div className="container">
        <div
          style={{ height: "600px" }}
          className="row d-flex align-items-center justify-content-between"
        >
          <div className="col-md-4 offset-md-1">
            <h1>
              Your New Smile <br />
              Starts Here
            </h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              laborum reiciendis ad voluptates illum odio beatae voluptatibus
              eum praesentium ducimus.
            </p>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "#1CC7C1", borderColor: "#1CC7C1" }}
            >
              GET APPOINMENT
            </button>
          </div>
          <div className="col-md-6">
            <img src={chair} style={{ width: "100%" }} alt="chair" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;

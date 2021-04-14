import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorsDetails = (props) => {
  const { img, mobile } = props.doctor;
  return (
    <div className="col-md-4">
      <div>
        <img
          src={img}
          alt="doctor"
          style={{ height: "230px", width: "100%" }}
        />
      </div>
      <h6 className="text-center mt-3">Dr. Curdi</h6>
      <div className="d-flex justify-content-center">
        <FontAwesomeIcon
          icon={faPhone}
          style={{ color: "#1CC7C1", marginRight: "10px" }}
        />
        <p>{mobile}</p>
      </div>
    </div>
  );
};

export default DoctorsDetails;

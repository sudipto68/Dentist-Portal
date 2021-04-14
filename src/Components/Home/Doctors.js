import React from "react";
import fifth from "../../images/fifth.png";
import DoctorsDetails from "./DoctorsDetails";

const Doctors = () => {
  const doctorDetails = [
    {
      img: fifth,
      mobile: +933224523,
    },
    {
      img: fifth,
      mobile: +933224523,
    },
    {
      img: fifth,
      mobile: +933224523,
    },
  ];
  return (
    <div className="container mt-4">
      <div className="text-center py-4">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>Our Doctors</h5>
      </div>
      <div className="row">
        {doctorDetails.map((doctor) => (
          <DoctorsDetails doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;

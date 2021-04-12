import React from "react";
import first from "../../images/first.png";
import second from "../../images/second.png";
import tooth from "../../images/tooth.png";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const serviceData = [
    {
      name: "Fluoride Treatment",
      img: first,
    },
    {
      name: "Cavity Filling",
      img: second,
    },
    {
      name: "Teath Whiting",
      img: tooth,
    },
  ];
  return (
    <div className="text-center py-4 mt-4 container">
      <div>
        <h4 style={{ color: "#1CC7C1" }}>OUR SERVICES</h4>
        <h3>Services We Provide</h3>
      </div>
      <div className="row py-5">
        {serviceData.map((data) => (
          <ServiceDetails key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;

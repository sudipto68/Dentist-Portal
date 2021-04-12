import React from "react";

const ServiceDetails = (props) => {
  const { name, img } = props.data;
  return (
    <div className="col-md-4">
      <img src={img} alt="tooth" style={{ height: "70px" }} />
      <div className="my-3">
        <h5>{name}</h5>
        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, eos?
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;

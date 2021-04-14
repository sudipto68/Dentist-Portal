import React from "react";

const TestimonialDetails = (props) => {
  const { title, city, img } = props.details;
  return (
    <div className="col-md-4 mt-3">
      <div className="card shadow border-0" style={{ width: "18rem" }}>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex">
            <img src={img} style={{ height: "40px" }} alt="client" />
            <div className="mx-3">
              <h6 style={{ color: "#1CC7C1" }} className="card-title">
                {title}
              </h6>
              <p>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;

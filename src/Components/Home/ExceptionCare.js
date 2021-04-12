import React from "react";
import fourth from "../../images/fourth.png";

const ExceptionCare = () => {
  return (
    <div className="container px-5 py-4">
      <div className="row">
        <div className="col-md-4">
          <img src={fourth} alt="child-img" style={{ height: "400px" }} />
        </div>
        <div className="col-md-6">
          <h2>
            Exceptional Dental
            <br /> Care , on Your Terms
          </h2>
          <p className="lh-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            ea incidunt. Ipsa eum ab quibusdam iure debitis. Odit assumenda
            quisquam nam maiores cum adipisci commodi ipsum, enim sapiente magni
            ad praesentium sint. Ex, autem amet! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus, ea incidunt. Ipsa eum ab
            quibusdam iure debitis. Odit assumenda quisquam nam maiores cum
            adipisci commodi ipsum, enim sapiente magni ad praesentium sint. Ex,
            autem amet!
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
  );
};

export default ExceptionCare;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = (props) => {
  const { title, description, background, icon } = props.info;
  return (
    <div className="col-md-4">
      <div
        style={{
          padding: "20px",
          backgroundColor: background,
          display: "flex",
          borderRadius: "5px",
          margin: "5px",
          height: "100px",
          justifyContent: "center",
        }}
      >
        {" "}
        <div>
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "white", fontSize: "30px", marginRight: "20px" }}
          />
        </div>
        <div>
          <h6 className="text-white">{title}</h6>
          <small className="text-white">{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;

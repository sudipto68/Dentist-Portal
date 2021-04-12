import React from "react";
import InfoCard from "./InfoCard";
import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const BusinessInfo = () => {
  const infoCard = [
    {
      title: "Opening Hours",
      description: "We are open 7 days",
      icon: faClock,
      background: "#1CC7C1",
    },
    {
      title: "Visit Our Locaion",
      description: "NY 1003, USA",
      icon: faMapMarker,
      background: "#3A4256",
    },
    {
      title: "Call Us Now",
      description: "+4449191914",
      icon: faPhone,
      background: "#1CC7C1",
    },
  ];
  return (
    <div className="container">
      <section className="row">
        {infoCard.map((info) => (
          <InfoCard key={info.title} info={info} />
        ))}
      </section>
    </div>
  );
};

export default BusinessInfo;

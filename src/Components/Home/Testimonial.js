import React from "react";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import TestimonialDetails from "./TestimonialDetails";

const Testimonial = () => {
  const cardDetails = [
    {
      title: "Winson Herry",
      city: "California",
      img: card1,
    },
    {
      title: "Winson Herry",
      city: "California",
      img: card2,
    },
    {
      title: "Winson Herry",
      city: "California",
      img: card3,
    },
  ];
  return (
    <div className="container py-3">
      <div>
        <h6 style={{ color: "#1CC7C1", fontWeight: "bold" }}>TESTIMONIAL</h6>
        <h2>
          What's our Patient <br /> says
        </h2>
      </div>
      <div className="row my-4">
        {cardDetails.map((details) => (
          <TestimonialDetails details={details} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

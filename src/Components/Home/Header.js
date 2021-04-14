import React from "react";
import HeaderMain from "./HeaderMain";
import Navbar from "./Navbar";
import "./Header.css";
import BusinessInfo from "./BusinessInfo";
import Services from "./Services";
import ExceptionCare from "./ExceptionCare";
import Appoinment from "./Appoinment";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import Doctors from "./Doctors";

const Header = () => {
  return (
    <div className="div-container">
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
      <Services />
      <ExceptionCare />
      <Appoinment />
      <Testimonial />
      <Blog />
      <Doctors />
    </div>
  );
};

export default Header;

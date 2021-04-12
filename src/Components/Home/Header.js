import React from "react";
import HeaderMain from "./HeaderMain";
import Navbar from "./Navbar";
import "./Header.css";
import BusinessInfo from "./BusinessInfo";
import Services from "./Services";
import ExceptionCare from "./ExceptionCare";

const Header = () => {
  return (
    <div className="div-container">
      <Navbar />
      <HeaderMain />
      <BusinessInfo />
      <Services />
      <ExceptionCare />
    </div>
  );
};

export default Header;

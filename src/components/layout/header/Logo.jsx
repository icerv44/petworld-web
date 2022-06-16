import React from "react";
import logo_1 from "../../../assets/images/logo_1.png";
function Logo() {
  return (
    <div className="header-logo">
      <img
        src={logo_1}
        alt="Logo"
        className="w-[80px] h-[80px] ml-[50px] mr-[60px]"
      ></img>
    </div>
  );
}

export default Logo;

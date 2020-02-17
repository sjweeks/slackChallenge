import React from "react";
import "../css/ContentHeader.css";

import Phone from "../images/phone.png";
import Settings from "../images/settings.png";
import Star from "../images/star.png";
import Dots from "../images/dots.png";
import Information from "../images/information.png";
import At from "../images/at.png";
import User from "../images/user.png";
import Pin from "../images/newpin.png";

function ContentHeader() {
  return (
    <div className="contentHeader">
      <div className="headerSection">
        <h1>Header</h1>
        <div className="infoImages">
          <button><img src={Star} alt="Star" /></button>
          <button><img src={User} alt="User" /></button>
          <button><img src={Pin} alt="Pin" /></button>
        </div>
      </div>
      <div className="headerImages">
        <button><img src={Phone} alt="Phone" /></button>
        <button><img src={Information} alt="Info" /></button>
        <button><img src={Settings} alt="Settings" /></button>
        <button><img src={At} alt="At" /></button>
        <button> <img src={Star} alt="Star" /></button>
        <button><img src={Dots} alt="Dots" /></button>
      </div>
    </div>
  );
}
export default ContentHeader;

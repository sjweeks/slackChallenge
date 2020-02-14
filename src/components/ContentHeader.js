import React from "react";
import "../css/ContentHeader.css";

import Phone from "../images/phone.png";
import Settings from "../images/settings.png";
import Star from "../images/star.png";
import Dots from "../images/dots.png";
import Information from "../images/information.png";
import At from "../images/at.png";

function ContentHeader() {
  return (
    <div className="contentHeader">
      <div>
        <h1>Header</h1>
      </div>
      <div className="headerImages">
        <img src={Phone} alt="Phone" />
        <img src={Information} alt="Info" />
        <img src={Settings} alt="Settings" />
        <img src={At} alt="At" />
        <img src={Star} alt="Star" />
        <img src={Dots} alt="Dots" />
      </div>
    </div>
  );
}

export default ContentHeader;

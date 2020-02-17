import React, { Component } from "react";
import Status from "./Status";
import JumpTo from "./JumpTo";
import { Link, BrowserRouter } from "react-router-dom";
import "../css/Navbar.css";
import Circle from "../images/circle.png";
import StatusPic from "../images/status.png";
import SlackPic from "../images/slackimage.png";

export default class Navbar extends Component {
  state = {
    username: "Slackers"
  };

  render() {
    return (
      <div className="navBar">
        <div className="slack">
          <img src={SlackPic} alt="Slack Logo" />
          <Status userName={this.state.username} />
        </div>
        <JumpTo />
        <nav>
          <div className="directory">
            <h4>Channels</h4>
            <div className="directoryList">
            <BrowserRouter>
              {" "}
              <Link className="links" to="./DevelopmentChannel">
                #Development
              </Link>{" "}
              <Link className="links" to="./RandomChannel">
                #Random
              </Link>{" "}
              <Link className="links" to="./GeneralChannel">
                #General
              </Link>{" "}
            </BrowserRouter>
            </div>
            <h4>Direct messages</h4>
            <div className="directoryList">
            <BrowserRouter>
              {" "}
              <Link className="links" to="./DmSarah">
                <img src={StatusPic} alt="Status" /> Sarah Weeks
              </Link>{" "}
              <Link className="links" to="./DmWill">
                <img src={StatusPic} alt="Status" /> Will Robinson
              </Link>{" "}
              <Link className="links" to="./DmDanny">
                <img src={StatusPic} alt="Status" /> Danny Sutcliffe
              </Link>{" "}
            </BrowserRouter>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

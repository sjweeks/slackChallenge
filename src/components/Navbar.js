import React, { Component } from "react";
import Status from "./Status";
import JumpTo from "./JumpTo";
import { Link, BrowserRouter } from "react-router-dom";
import "../css/Navbar.css";

export default class Navbar extends Component {
  state = {
    username: "Slackers"
  };

  render() {
    return (
      <div className="navbar">
        <Status userName={this.state.username} />
        <JumpTo className="jumpTo" />
        <nav className="directory">
          <ul>
            <h4>Channels</h4>
            <BrowserRouter>
              <li>
                {" "}
                <Link to="./DevelopmentChannel">Development</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="./RandomChannel">Random</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="./GeneralChannel">General</Link>{" "}
              </li>
            </BrowserRouter>
            <h4>Direct messages</h4>
            <BrowserRouter>
              <li>
                {" "}
                <Link to="./DmSarah">Sarah Weeks</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="./DmWill">Will Robinson</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="./DmDanny">Danny Sutcliffe</Link>{" "}
              </li>
            </BrowserRouter>
          </ul>
        </nav>
      </div>
    );
  }
}

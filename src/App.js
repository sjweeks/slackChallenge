import React, { Component } from "react";
import "./css/App.css";

import Content from "./components/Content.js";
import Navbar from "./components/Navbar.js";
import ContentHeader from "./components/ContentHeader.js";
import Attach from "./images/attach.png";
import Bold from "./images/bold.png";
import Italic from "./images/italic.png";
import StrikeThrough from "./images/strikethrough.png";
import Link from "./images/link.png";
import OrderList from "./images/orderlist.png";
import List from "./images/list.png";
import Type from "./images/type.png";
import At from "./images/at.png";
import Emoji from "./images/smile.png";
import Status from "./components/Status.js";
import optionsButton from "./images/options.png";

class App extends Component {
  state = {
    showComponent: true
  };
  displayNavbar = () => {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false
      });
    } else {
      this.setState({
        showComponent: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <nav className="navContainer">
        <input className="optionsButton" type="image" src={optionsButton} alt="Options" onClick={this.displayNavbar} />
          {this.state.showComponent ? <Navbar /> : null}
            <Status/>
        </nav>
        <br />
        <div className="content-container">
          <ContentHeader />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;

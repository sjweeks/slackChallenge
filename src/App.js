import React, { Component } from "react";
import "./css/App.css";

import Content from "./components/Content.js";
import Navbar from "./components/Navbar.js";
import ContentHeader from "./components/ContentHeader.js";
import Attach from './images/attach.png';
import Bold from './images/bold.png';
import Italic from './images/italic.png';
import StrikeThrough from './images/strikethrough.png';
import Link from './images/link.png';
import OrderList from './images/orderlist.png';
import List from './images/list.png';
import Type from './images/type.png';
import At from './images/at.png';
import Emoji from './images/smile.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <h3>Nav Bar</h3>
          <Navbar />
        </div>
        <br />
        <div className="content-container">
          <ContentHeader />
          <Content />
{/* 
          <div c>
          <input className="inputSection" type="text" />
            <img src={Attach}/>

          </div> */}
        </div>
      </div>
    );
  }
}

export default App;

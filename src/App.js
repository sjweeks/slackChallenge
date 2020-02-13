import React, { Component } from 'react'
import './css/App.css';

import Content from './components/Content.js'
import Navbar from './components/Navbar.js'
import ContentHeader from './components/ContentHeader.js'

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
          <input className="inputSection" type='text'/>
        </div>
        
      </div>
    )
  }
}

export default App;
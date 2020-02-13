import React, { Component } from 'react'
import './css/App.css';

import Content from './components/Content.js'
import Navbar from './components/Navbar.js'
import ContentHeader from './components/ContentHeader.js'

class App extends Component {

  state = {
    inputValue: "",
    message: []
  }

  updateMessage = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  storeMessage = () => {
    let joined = this.state.message.concat(this.state.inputValue)
    this.setState({
      message: joined
    })
  }

  render() {

    const messages = this.state.message.map(item => <p>{item}</p> );

    return (
      <div>

        <div className='navbar'>
          <h3>Nav Bar</h3>
          <Navbar />
        </div>

        <div className='content'>
          <ContentHeader />
          <Content />
          {messages}
          <input type="text" onChange={this.updateMessage}/>
          <button onClick={this.storeMessage}>Send Message</button>
        </div>
        
      </div>
    )
  }
}

export default App;
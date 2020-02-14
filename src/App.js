import React, { Component } from 'react'
import './css/App.css';

import Content from './components/Content.js'
import Navbar from './components/Navbar.js'
import Status from './components/Status.js'
import ContentHeader from './components/ContentHeader.js'

class App extends Component {
  render() {
    return (
      <div>

        <nav className='navbar'>
          
          <Navbar>
            <Status/>
          </Navbar>
        </nav>

         <div className='content'>
          <ContentHeader />
          <Content />
          {/* <input type='text'/> */}
         </div> 
        
      </div>
    )
  }
}

export default App;
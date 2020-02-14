
import React, { Component } from 'react'
import Status from './Status'
import JumpTo from './JumpTo'
import { Link, BrowserRouter } from 'react-router-dom'
import '../css/Navbar.css';

export default class Navbar extends Component {

    state = {
        username: "Slackers"
    }

    render() {






        return (
            <div>
                <Status userName={this.state.username} />
                < JumpTo />
                <nav>
                    <ul>
                        <BrowserRouter>
                            <li> <Link to="./DevelopmentChannel">Development</Link> </li>
                            <li> <Link to="./RandomChannel">Random</Link> </li>
                            <li> <Link to="./GeneralChannel">General</Link> </li>
                        </BrowserRouter>
                        {/* <li> <Link to="./GeneralChannel">Development</Link> </li>
                        <li> <Link to="./GeneralChannel">Development</Link> </li>
                        <li> <Link to="./GeneralChannel">Development</Link> </li> */}





                    </ul>
                </nav>
            </div>
        )
    }
}

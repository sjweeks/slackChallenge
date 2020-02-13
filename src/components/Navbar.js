
import React, { Component } from 'react'
import Status from './Status'
import JumpTo from './JumpTo'
export default class Navbar extends Component {

    state = {
        username: "Slackers"
    }

    render() {






        return (
            <div>
                <Status userName={this.state.username} />
                < JumpTo />
                {/* <nav>
                    <ul>
                        <li> <Link to="./DevelopmentChannel">Development</Link> </li>


                        <li> <Link to='/about'>About</Link> </li>
                        <li>Basket: {props.myBasket}</li>
                    </ul>
                </nav> */}
            </div>
        )
    }
}

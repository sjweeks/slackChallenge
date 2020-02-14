import React, { Component } from 'react'
import '../css/Content.css'

import Attach from '../images/attach.png';
import Bold from '../images/bold.png';
import Italic from '../images/italic.png';
import StrikeThrough from '../images/strikethrough.png';
import Link from '../images/link.png';
import OrderList from '../images/orderlist.png';
import List from '../images/list.png';
import Type from '../images/type.png';
import At from '../images/at.png';
import Emoji from '../images/smile.png';

class Content extends Component {
    state = {
        profilePic: "",
        userName: "",
        messageTime: "",
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
        const messages = this.state.message.map(item => <p>{item}</p>, <p>"16:00"</p>);
        return ( 
            <div className="content-container">
                <div>
                    {/* UserImage, UserName, TimeSent */}
                    {messages}
                </div>
                <div className="inputSection">
                    <div>
                    <input type="text" onChange={this.updateMessage}/>
                    <button onClick={this.storeMessage}>Send Message</button>
                    </div>
                    <br />
                    <div className="imageRows">
                        <img src={Attach} alt="Attach" />
                        <img src={Bold} alt="Bold" />
                        <img src={Italic} alt="Italic" />
                        <img src={Attach} alt="Attach" />
                        <img src={Attach} alt="Attach" />
                        <img src={Attach} alt="Attach" />
                        <img src={Attach} alt="Attach" />
                        <img src={Attach} alt="Attach" />
                        <img src={Attach} alt="Attach" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;
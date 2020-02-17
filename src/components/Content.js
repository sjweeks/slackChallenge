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
import ProfilePic from '../images/profilepic.png';

class Content extends Component {
    state = {
        profilePic: "",
        userName: "",
        messageTime: [],
        inputValue: "",
        message: []
    }
    updateMessage = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    storeMessage = (e) => {
        let messageJoined = this.state.message.concat(this.state.inputValue)
        this.setState({
            message: messageJoined,
            inputValue: ""
        })
    }

    render() {
        const messages = this.state.message.map((item, index) => {
            let newTimeStamp= new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', /*second: '2-digit'*/ }).format(Date.now())
            return(
                <div className="messageHead">
                    <div>
                        <img src={ProfilePic} alt="profilePic" />
                    </div>
                    <div key={index}>
                        <p className="username">UserName-HARDCODED <span className="timestamp">{newTimeStamp}</span></p>
                        <p>{item}</p>
                    </div>
                </div>
        )});

        return ( 
            <div className="content-container">
                <div>
                    {/* UserImage, UserName, TimeSent */}
                    {messages}
                </div>
                <div className="inputSection">
                    <div className="userInput">
                    <input className ="actualInput" placeholder="Enter Message Here" value={this.state.inputValue} type="text" onChange={this.updateMessage}/>
                    <button className="inputButton" onClick={this.storeMessage}>Send Message</button>

                    </div>
                    <br />
                    <div className="imageRows">
                        <img src={Attach} alt="Attach" />
                        <img src={Bold} alt="Bold" />
                        <img src={Italic} alt="Italic" />
                        <img src={StrikeThrough} alt="Strike" />
                        <img src={Link} alt="Link" />
                        <img src={OrderList} alt="Order List" />
                        <img src={List} alt="List" />
                        <img src={Type} alt="Type" />
                        <img src={At} alt="At" />
                        <img src={Emoji} alt="Emoji" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;
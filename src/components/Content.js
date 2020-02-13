import React, { Component } from 'react'
import '../css/Content.css'

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
            <div className="messageBody">

                <div>
                    {/* UserImage, UserName, TimeSent */}
                    {messages}
                </div>
                <div className="inputArea">
                    <input type="text" onChange={this.updateMessage}/>
                    <button onClick={this.storeMessage}>Send Message</button>
                </div>
                
            </div>
        )
    }
}

export default Content;
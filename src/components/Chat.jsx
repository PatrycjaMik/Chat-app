import React from "react";
import io from 'socket.io-client'

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myMessage: "Hello hello",
            messages: []
        };
        this.connectionChat = null;
       
      }

      componentDidMount() {
        if (!this.connectionChat) {
            this.connectionChat = io.connect("https://chat-server.fbg.pl"
            )
            this.connectionChat.on('chat message', (message) => {
                this.setState(state => {
                    return {
                        messages: [...state.messages, message]
                    }
                })
            })
        }
      }
    
      messageChange = (e) => {
        this.setState({myMessage: e.target.value})
    }

    sendMessage = () => {
        this.connectionChat.emit('chat message', {
            authorId: this.props.username, 
            text: this.state.myMessage
        });
    }

    render() {
    return (
        <section className="container">
            <div>
                <h1>Rozmowa</h1>
                <div>
                    <input onChange={this.messageChange}></input>
                    <button className="btn" onClick={this.sendMessage}>wyślij</button>
                </div>
            {this.state.messages.map((e) => (
                <><h2>{e.authorId}</h2><h4>{e.text}</h4></>
            ))}
            </div>
        </section>
    )
}
}
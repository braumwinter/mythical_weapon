import React from 'react';
import './chat.scss';
import {Form} from 'semantic-ui-react'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleClick2() {
        const listMessage = document.getElementById("chatField");
        const liMessage = document.createElement('li');
        const message = document.getElementById("yrem").value;
        liMessage.className = "secondMessage";
        liMessage.innerHTML = message;
        listMessage.appendChild(liMessage);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div id="panel">
                <span><br/>н<br/>а<br/>п<br/>и<br/>ш<br/>и<br/>т<br/>е<br/> <br/>н<br/>а<br/>м</span>
                <div id="hidden_panel">
                    <ul id="chatField">
                        <li key="Message0" className="firstMessage">
                            Здравствуйте) Могу ли я Вам чем-нибудь помочь?
                        </li>
                    </ul>
                    <div id="chatForm">
                        <Form size="small" >
                            <Form.Group>
                                <input
                                    id="yrem"
                                    type="text"
                                    value={this.state.message}
                                    name="message"
                                    placeholder="Ваше сообщение"
                                    onChange={this.handleChange}
                                />
                                <button type='button' id="vort" className="myButton" onClick={this.handleClick2}>
                                    {String.fromCharCode(10149)}
                                </button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;
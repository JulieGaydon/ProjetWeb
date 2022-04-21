import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import Message from './Message';
import './ListeMessage.css';

class ListeMessage extends Component{
    constructor(props){
        super(props);
        // this.state = {ListeM : [{mess : "Hello"},{mess : "How are you"}]}
        this.state = {ListeM : []}
        // this.setState(this.ListM = props.mess)
    }

    addMessage(message){
        this.setState(this.ListeM = this.ListeM.add(message))
    }

    render(){
        return(<div className = "ListeMessage">
            <div>
                <h2 id = "Lmessage">Messages</h2>
            </div>
        </div>)
    }
}

export default ListeMessage;
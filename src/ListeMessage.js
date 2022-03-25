import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import Message from './Message'

class ListeMessage extends Component{
    constructor(props){
        super(props);
        // this.state = {ListeM : [{mess : "Hello"},{mess : "How are you"}]}
        this.state = {ListeM : ["Hello","How are you"]}
        // this.setState(this.ListM = props.mess)
    }

    componentWillReceiveProps(nextprops){
        this.setState(this.ListeM = nextprops.ListeM)
    }

    addMessage(ms){
        this.setState(this.ListeM = this.ListeM.add(ms))
    }

    render(){
        return(<div className = "ListeMessage">
            {/* { this.state.ListeM.map((mess) => {return <Message m = {Message.mess}/>}
            )} */}
            {this.state.ListeM.map(m => (
                <li key={m}>{m}</li>
            ))}
        </div>)
    }
}

export default ListeMessage;
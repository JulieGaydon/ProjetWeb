import React, { Component } from 'react';

class Message extends Component{
    constructor(props){
        super(props);
        props = {m : "unMessage"}
        this.state = {m : props.m}
    }

    handleMessageClick(){
        this.setState = {m : this.state.m}
    }

    render(){
        return(<div className='Message' onClick = {()=> this.handleMessageClick()}>{this.props.m}
        </div>)
    }
}

export default Message;
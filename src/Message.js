import React, { Component } from 'react';
import './message.css';

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {m : props.m}
    }

    handleMessageClick(){
        this.setState = {m : this.state.m}
    }

    render(){
        return(<div className='Message' onClick = {()=> this.handleMessageClick()}>{this.props.m}
            <tr>
                <fieldset className='entete'>
                    <td>date</td>
                    <td>Pseudo</td>
                </fieldset>
                
                <td>Message</td>
            </tr>
        </div>)
    }
}

export default Message;
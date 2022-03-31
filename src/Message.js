import React, { Component } from 'react';

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
                <td>date</td>
                <td>Pseudo</td>
                <td>Message</td>
            </tr>
        </div>)
    }
}

export default Message;
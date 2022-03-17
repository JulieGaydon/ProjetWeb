import React, { Component } from 'react';

class Message extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <label>Message </label><input type = "text"></input>
            {/* recuperer le pesudo */}
            {/* recuperer date */}
            {/* photo */}
            <button type = "button">Publier</button>
        </div>)
    }
}

export default Message;
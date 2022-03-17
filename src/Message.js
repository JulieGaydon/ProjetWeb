import React, { Component } from 'react';

class Message extends Component{
    constructor(props){
        super(props);
        props = {Message}
    }

    render(){
        return(
            <fieldset>
                <label>Message </label><input type = "text"></input>
                {/* recuperer le pesudo */}
                {/* recuperer date */}
                {/* photo */}
                <button type = "button">Publier</button>
            </fieldset>
        )
    }
}

export default Message;
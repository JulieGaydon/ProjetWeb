import React, { Component } from 'react';

class FormAddMessage extends Component{

    constructor(props){
        super(props);
    }

    send(){
        var data_to_send = {
            mess : this.ref.message.value
        }
        this.props.addMessage(data_to_send);
    }

    render(){
        return (<form className = "FormAddMessage">
            <label>message </label><input type = "text" ref = "message"></input>
            <button className = "button" onClick = {()=>this.send()}>Publier</button>
        </form>
        )
    }

}

export default FormAddMessage;
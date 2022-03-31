import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweets from './MurDeTweets';


class FormAddMessage extends Component{

    constructor(props){
        super(props);
    }

    // send(){
    //     var data_to_send = {
    //         mess : this.ref.message.value
    //     }
    //     this.props.addMessage(data_to_send);
    // }

    publierM(value){
        // fonction ajout message a base de donnees
        // this.props.addMessage(value)
        this.props.CallBackEcrireMessage(false)
        return this.state;
    }
    
    render(){
        return (<form className = "FormAddMessage">
            <label>message </label><input type = "text" ref = "message"></input>
            {/* <button className = "button" onClick = {()=>this.send()}>Publier</button> */}
            <button className = "button" onClick ={() => this.props.CallBackEcrireMessage(false)}>X</button>
            <button className = "button" onClick ={() => this.publierM()}>Publier</button>
        </form>
        )
    }

}

export default FormAddMessage;
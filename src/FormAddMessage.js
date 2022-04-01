import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './FormAddMessage.css';

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
            <fieldset>
                <button className = "button" id = "annulerM" onClick ={() => this.props.CallBackEcrireMessage(false)}>X</button>
                <label id = "LabelM">Message </label><input type = "text" id = "inputM" ref = "message"></input>
                {/* <button className = "button" onClick = {()=>this.send()}>Publier</button> */}
                <button className = "button" id = "publierM" onClick ={() => this.publierM()}>Publier</button>
            </fieldset>
        </form>
        )
    }

}

export default FormAddMessage;
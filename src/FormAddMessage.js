import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './FormAddMessage.css';

class FormAddMessage extends Component{

    constructor(props){
        super(props);
        this.state = {message : ""}
    }

    publierM(value){
        // fonction ajout message a base de donnees
        // this.props.addMessage(value)
        this.props.CallBackEcrireMessage(false)
        return this.state;
    }
    
    render(){
        return (<form className = "FormAddMessage">
                    <button className = "button" id = "annuler" onClick ={() => this.props.CallBackEcrireMessage(false)}>X</button>
                    <div id="message">
                        <label id = "LabelM">Message </label><input type = "text" id = "inputM" ref = "message" placeholder='Ecrire votre message'></input>
                        {/* <button className = "button" onClick = {()=>this.send()}>Publier</button> */}
                        <button className = "button" id = "publierM" onClick ={() => this.publierM()}>Publier</button>
                    </div>
                </form>
        )
    }

}

export default FormAddMessage;
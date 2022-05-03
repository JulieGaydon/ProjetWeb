import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './FormAddMessage.css';
import axios from 'axios';


class FormAddMessage extends Component{

    constructor(props){
        super(props);
        this.state = {message : "", pseudo : "", connexion : true}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // publierM(value){
    //     // fonction ajout message a base de donnees
    //     // this.props.addMessage(value)
    //     this.props.CallBackEcrireMessage(false)
    //     return this.state;
    // }
    
    handleSubmit(event){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        console.log("pseudo addMessage :",this.state.pseudo)
        instance.put('api/message',{Pseudo : this.state.pseudo, Message :  this.state.message})
        .then(function (response){
            console.log("resultat",response)
            alert(response)
        })
        .catch(function (error){
            console.log(error)
            alert("error",error)
        })
        alert("etat",this.state.connexion)

    }

    handleChange(event){
        this.setState({message : document.forms["FormAddMessage"].elements["message"].value});
        let p = this.props.passerPseudo
        this.setState({pseudo : p})
    }
    
    EventConnected() {
        return (
            <form className = "FormAddMessage" name = "FormAddMessage">
                    <div id="message">
                        <label id = "LabelM"></label><input type = "text" id = "inputM" ref = "message" placeholder='Ecrire votre message' name = "message" value= {this.state.message} onChange= {this.handleChange}></input>
                        <button className = "button" id = "publierM" onClick={()=>this.handleSubmit()}>Publier</button>
                    </div>
                </form>
        )
    }

    render(){
        if(this.state.connexion === true){
            return this.EventConnected()
        }
    }

}

export default FormAddMessage;
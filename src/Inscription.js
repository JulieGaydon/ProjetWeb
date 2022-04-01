import React, { Component } from 'react';
import Profil from './Profil';
import './Inscription.css';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';

class Inscription extends Component{

    constructor(props,{s,updateInscription}){
        super(props);
        this.state = {Pseudo : "",connexion : false};
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
        return (<div className = "PagePrincipale">
            {<PagePrincipale/>}
        </div>);
        }

     EventConnected() {      
        return(
            //a rajouter : date de naissance, confirmation mdp, photo, centres interets
            <form>
                <fieldset id = "fieldsetI">
                    <button type="button" id = "annulerI" onClick={()=>this.annulation()}>X</button>
                    <h2 id = "titreI">Inscription</h2>
                    <label id = "labelI">Nom </label><input type = "text" id = "inputI" ></input><br/>
                    <label id = "labelI">Prénom </label><input type = "text" id = "inputI" ></input><br/>
                    <label id = "labelI">Adresse Mail </label><input id = "inputI" type = "email"></input><br/>
                    <label id = "labelI">Pseudo </label><input id = "inputI" type = "text"></input><br/>
                    <label id = "labelI">Mot de Passe </label><input id = "inputI" type = "password"></input><br/>
                    <label id = "labelI">Confirmer Mot de Passe </label><input id = "inputI" type = "password"></input><br/>
                    <button type="button" id = "inscription" onClick={()=>this.props.CallBackChangeEtat(true)}>Inscription</button>
                </fieldset>
            </form>)
    }

    render(){
        if(this.state.connexion === false){
            return this.EventConnected()
        }
    }
}

export default Inscription;

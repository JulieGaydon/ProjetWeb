import React, { Component } from 'react';
import axios from 'axios';
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
                 <h1 id = "PPtitre">ButterFly</h1>
                <fieldset id = "principal">
                    <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                    <h2 id="titreI" >Inscription</h2>
                    <input type = "text" id = "inputI" placeholder='Nom'></input><br/>
                    <input type = "text" id = "inputI" placeholder= "Prénom"></input><br/>
                    <input id = "inputI" type = "email" placeholder="Adresse Mail/pseudo" ></input><br/>
                    <input id = "inputI" type = "text" placeholder= "Pseudo"></input><br/>
                    <input id = "inputI" type = "password" placeholder="Mot de Passe "></input><br/>
                    <input id = "inputI" type = "password" placeholder="Confirmer Mot de Passe" ></input><br/>
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

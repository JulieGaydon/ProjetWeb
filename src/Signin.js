import React, { Component } from 'react';
import Utilisateur from './Utilisateur';
import './Signin.css';
import Actualites from './Actualites';
import PagePrincipale from './PagePrincipale';

class Signin extends Component{

    constructor(props,{s,updateSignin}){
        super(props);
        this.inscription = this.inscription.bind(this);
        this.state = {Pseudo : "",connexion : false};
    }

    inscription() {
        this.setState({Pseudo : "Pseudo",connexion : true});
        return this.state;
      }
    annulation() {
        this.setState({Pseudo : "Pseudo",connexion : false});
        return (<div className = "Actualites">
            {<PagePrincipale/>}
        </div>);
        }

     EventConnected() {      
        return(
            //a rajouter : date de naissance, confirmation mdp, photo, centres interets
            <form>
                <fieldset>
                    <legend>Inscription</legend>
                        <label>Nom </label><input type = "text"></input><br/>
                        <label>Prénom </label><input type = "text"></input><br/>
                        <label>Pseudo </label><input type = "text" id = "pseudo"></input><br/>
                        <label>Adresse Mail </label><input type = "email"></input><br/>
                        <label>Mot de Passe </label><input type = "password"></input><br/>
                        <button type="buttonI" onClick={()=>this.inscription()}>Inscription</button>
                        <b>
                            <button type="buttonA" onClick={()=>this.annulation()}>Annuler</button>
                        </b>
                </fieldset>
            </form>)
    }

    render(){
        if(this.state.connexion === false){
            return this.EventConnected()
        }
        if(this.state.connexion === true){
            return (<div className = "Actualites">
                {<Actualites/>}
            </div>);
        }
    }

    //fonction permettant de recuperer infos entrees
}

export default Signin;

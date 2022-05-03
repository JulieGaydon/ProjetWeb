import React, { Component } from 'react';
import axios from 'axios';
import Profil from './Profil';
import './Inscription.css';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';

class Inscription extends Component{

    constructor(props,{s,updateInscription}){
        super(props);
        this.state = {nom : "",pseudo : "",prenom : "", mdp : "", mail : "", confirmMDP : "",connexion : false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
        // return (<div className = "PagePrincipale">
        //     {<PagePrincipale/>}
        // </div>);
        }

    handleSubmit(event){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        instance.put('api/user',{Nom : this.state.nom, Prenom :  this.state.prenom, Pseudo : this.state.pseudo,Password :  this.state.mdp,AdresseM : this.state.mail, ConfirmMDP :  this.state.confirmMDP})
        .then(function (response){
            console.log("resultat"+response)
            alert(response)
        })
            .then(()=>{
                // on transmet le pseudo a PP
                this.props.recupPseudo(this.state.pseudo)
                this.props.CallBackChangeEtat(true)
            })
        .catch(function (error){
            console.log(error)
            alert("error"+error)
        })
    }

    handleChange(event){
       this.setState({pseudo : document.forms["inscriptionF"].elements["pseudo"].value});
       this.setState({nom : document.forms["inscriptionF"].elements["nom"].value});
       this.setState({prenom : document.forms["inscriptionF"].elements["prenom"].value});
       this.setState({mdp : document.forms["inscriptionF"].elements["mdp"].value});
       this.setState({mail : document.forms["inscriptionF"].elements["mail"].value});
       this.setState({confirmMDP : document.forms["inscriptionF"].elements["confirmMDP"].value});
        // event.target.value="toto";
    }

    EventConnected() {      
        return(
            //a rajouter : date de naissance, confirmation mdp, photo, centres interets
            <form name = "inscriptionF" onSubmit={this.handleSubmit}>
                 <h1 id = "PPtitre">ButterFly</h1>
                <fieldset id = "principal">
                    <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                    <h2 id="titreI" >Inscription</h2>
                    <input type = "text" id = "inputI" placeholder='Nom' name = "nom" value= {this.state.nom} onChange= {this.handleChange}></input><br/>
                    <input type = "text" id = "inputI" placeholder= "Prénom" name = "prenom" value= {this.state.prenom} onChange= {this.handleChange}></input><br/>
                    <input id = "inputI" type = "email" placeholder="Adresse Mail" name = "mail" value= {this.state.mail} onChange= {this.handleChange}></input><br/>
                    <input id = "inputI" type = "text" placeholder= "Pseudo" name = "pseudo" value= {this.state.pseudo} onChange= {this.handleChange} ></input><br/>
                    <input id = "inputI" type = "password" placeholder="Mot de Passe " name = "mdp" value= {this.state.mdp} onChange= {this.handleChange}></input><br/>
                    <input id = "inputI" type = "password" placeholder="Confirmer Mot de Passe" name = "confirmMDP" value= {this.state.confirmMDP} onChange= {this.handleChange} ></input><br/>
                    <button type="button" id = "inscription" onClick={()=>this.handleSubmit()}>Inscription</button>
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

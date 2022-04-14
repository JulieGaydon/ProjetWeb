import React, { Component } from 'react';
import axios from 'axios';
import Profil from './Profil';
import './Inscription.css';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';

class Inscription extends Component{

    constructor(props,{s,updateInscription}){
        super(props);
        this.state = {nom : "",pseudo : "",connexion : false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
        return (<div className = "PagePrincipale">
            {<PagePrincipale/>}
        </div>);
        }

    handleSubmit(event){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
          });
          console.log("coucou");
          alert(this.state.pseudo);

        instance.put('api/user',{Nom : "Diallo", Prenom : 'Mohamed',Pseudo : this.state.pseudo,Password : 'cordonBleu',AdresseM : 'julie@gmail.com'})
        .then(function (response){
            console.log("resultat",response)
            alert(response)
        })
        .catch(function (error){
            console.log(error)
            alert("error",error)
        })
        alert("apres")
    }

    handleChange(event){
       this.setState({pseudo : event.target.value});
        // event.target.value="toto";
    }

    EventConnected() {      
        return(
            //a rajouter : date de naissance, confirmation mdp, photo, centres interets
            <form onSubmit={this.handleSubmit}>
                 <h1 id = "PPtitre">ButterFly</h1>
                <fieldset id = "principal">
                    <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                    <h2 id="titreI" >Inscription</h2>
                    <input type = "text" id = "inputI" placeholder='Nom'></input><br/>
                    <input type = "text" id = "inputI" placeholder= "Prénom"></input><br/>
                    <input id = "inputI" type = "email" placeholder="Adresse Mail/pseudo" ></input><br/>
                    <input id = "inputI" type = "text" placeholder= "Pseudo" value= {this.state.pseudo} onChange= {this.handleChange} ></input><br/>
                    <input id = "inputI" type = "password" placeholder="Mot de Passe "></input><br/>
                    <input id = "inputI" type = "password" placeholder="Confirmer Mot de Passe" ></input><br/>
                    {/* <button type="button" id = "inscription" onClick={()=>this.props.CallBackChangeEtat(true)}>Inscription</button> */}
                    <button type="submit" id = "inscription">Inscription</button>
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

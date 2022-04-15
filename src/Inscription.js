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
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePrenom = this.handleChangePrenom.bind(this);
        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
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
          /*alert(this.state.pseudo);
          alert(this.state.prenom)*/

        instance.put('api/user',{Nom : this.state.nom, Prenom : this.state.prenom,Pseudo : this.state.pseudo,Password : this.state.password ,AdresseM : this.state.mail})
        .then(function (response){
            console.log("resultat",response)
            this.props.CallBackChangeEtat(true)
            alert(response)
        })
        .catch(function (error){
            console.log(error)
            alert("error",error)
        })
        alert("apres")
    }

    handleChangePseudo(event){
       this.setState({pseudo : event.target.value});
        // event.target.value="toto";
    }

    handleChangePrenom(event){
        this.setState({prenom : event.target.value});
    }

    handleChangeNom(event){
        this.setState({nom : event.target.value});
    }

    handleChangePassword(event){
        this.setState({password : event.target.value});
    }

    handleChangeMail(event){
        this.setState({mail : event.target.value});
    }



    EventConnected() {      
        return(
            //a rajouter : date de naissance, confirmation mdp, photo, centres interets
            <form>
                 <h1 id = "PPtitre">ButterFly</h1>
                <fieldset id = "principal">
                    <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                    <h2 id="titreI" >Inscription</h2>
                    <input type = "text" id = "inputI" placeholder="Nom" value = {this.state.nom} onChange= {this.handleChangeNom}></input><br/>
                    <input type = "text" id = "inputI" placeholder= "Prénom" value = {this.state.prenom} onChange= {this.handleChangePrenom}></input><br/>
                    <input id = "inputI" type = "email" placeholder="Adresse Mail/pseudo" value = {this.state.mail} onChange= {this.handleChangeMail}></input><br/>
                    <input id = "inputI" type = "text" placeholder= "Pseudo" value = {this.state.pseudo} onChange= {this.handleChangePseudo} ></input><br/>
                    <input id = "inputI" type = "password" placeholder="Mot de Passe "></input><br/>
                    <input id = "inputI" type = "password" placeholder="Confirmer Mot de Passe" ></input><br/>
                    {/*le onClick ne fonctionne pas*/}
                    <button type="button" id = "inscription" onClick={()=>this.handleSubmit()}>Inscription</button>
                    {/*<button type="submit" id = "inscription"}>Inscription</button>*/}
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

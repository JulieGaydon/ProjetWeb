import React, { Component } from 'react';
import axios from 'axios';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';
import "./Connexion.css";

class Connexion extends Component{
    constructor(props){
        super(props);
        this.state = {nom : "",pseudo : "",connexion : false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

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

        instance.get('api/user',{Pseudo : this.state.pseudo,Password : this.state.password})
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
    }

    handleChangePassword(event){
        this.setState({password : event.target.value});
    }

    EventConnected() {      
        return(
        <form>
            <h1 id = "PPtitre">ButterFly</h1>
            <fieldset id = "principal">
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <img src="papillon.jpg"/>
                <input id = "inputC" type = "text" placeholder= "Pseudo" value = {this.state.pseudo} onChange= {this.handleChangePseudo} ></input><br/>
                <input id = "inputC" type = "text" placeholder= "Password" value = {this.state.password} onChange= {this.handleChangePassword} ></input><br/> 
                <button type="button" id = "connexion" onClick={() => this.props.CallBackChangeEtat(true)}>Connexion</button>
            </fieldset>
        </form>
        )
    }

    render(){
        if(this.state.connexion === false){
            return this.EventConnected()
        }
    }
}

export default Connexion;
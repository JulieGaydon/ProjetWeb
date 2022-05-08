import React, { Component } from 'react';
import axios from 'axios';
import "./Connexion.css";

class Connexion extends Component{
    constructor(props){
        super(props);
        this.state = {connexion : false, pseudo : "", mdp : ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
    }

    handleSubmit(){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        instance.post('api/user/login',{login : this.state.pseudo, password : this.state.mdp})
            .then(function (response){
                console.log(response)
            })
            .then(()=>{
                this.props.recupPseudo(this.state.pseudo)
                this.props.CallBackChangeEtat(true)
            })
            .catch(function (error){
                console.log(error)
            })
    }

    handleChange(event){
        this.setState({pseudo : document.forms["connexionF"].elements["pseudo"].value});
        this.setState({mdp : document.forms["connexionF"].elements["mdp"].value});
     }

    EventConnected() {      
        return(
        <form name = "connexionF" onSubmit={this.handleSubmit}>
            <h1 id = "titre">BUTTERFLY</h1>
            <fieldset id = "cadreConnexion">
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <h2 id = "inscription">CONNEXION</h2>
                <img id="pap" src="papillon.jpg"/>
                <div id = "inputsConnec">
                    <input id="inputConnexion" type = "text" placeholder='UserName' name = "pseudo" value= {this.state.pseudo} onChange= {this.handleChange}></input>   
                    <input id="inputConnexion" type = "password" placeholder='Password' name = "mdp" value= {this.state.mdp} onChange= {this.handleChange}></input>
                </div>
                <button type="button" id = "boutonConnexion" onClick={() => this.handleSubmit()}>Connexion</button>
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
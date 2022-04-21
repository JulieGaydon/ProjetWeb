import React, { Component } from 'react';
import axios from 'axios';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';
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
        return (<div className = "PagePrincipale">
            {<PagePrincipale/>}
        </div>);
    }

    handleSubmit(){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        instance.post('api/user/login',{login : this.state.pseudo, password : this.state.mdp})
          .then(function (response){
                console.log("bon mdp")
                console.log(response)
                alert(response)
            })
            .then(()=>{
                console.log("changement")
                this.props.CallBackChangeEtat(true)
            })
          .catch(function (error){
                console.log("mauvais mdp")
                alert(error)
                console.log(error)
            })
    }

    handleChange(event){
        this.setState({pseudo : document.forms["connexionF"].elements["pseudo"].value});
        this.setState({mdp : document.forms["connexionF"].elements["mdp"].value});
         // event.target.value="toto";
     }

    EventConnected() {      
        return(
        <form name = "connexionF" onSubmit={this.handleSubmit}>
            <h1 id = "PPtitre">ButterFly</h1>
            <fieldset id = "principal">
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <img src="papillon.jpg"/>
                <input id="inputC" type = "text" placeholder='UserName' name = "pseudo" value= {this.state.pseudo} onChange= {this.handleChange}></input>   
                <input id="inputC" type = "password" placeholder='Password' name = "mdp" value= {this.state.mdp} onChange= {this.handleChange}></input>
                <button type="button" id = "connexion" onClick={() => this.handleSubmit()}>Connexion</button>
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
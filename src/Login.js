import React, { Component } from 'react';
import Actualites from './Actualites';
import PagePrincipale from './PagePrincipale';
import "./Login.css";


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {connexion : false};
    }

    connexion() {
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
        <form>
            <b>
                <button type="buttonA" onClick={()=>this.annulation()}>X</button>
                <img src="papillonLogo.svg"/>
            </b>
            <fieldset>
                <label>USERNAME / MAIL</label><input type = "text"></input>   
                <label>PASSWORD</label><input type = "password"></input>
                <button type="buttonI" onClick={()=>this.connexion()}>Connexion</button>
            </fieldset>
        </form>
        )
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
}

export default Login;
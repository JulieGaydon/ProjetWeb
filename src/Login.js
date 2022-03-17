import React, { Component } from 'react';
import Actualites from './Actualites';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {connexion : false};
    }

    connexion() {
        this.setState({Pseudo : "Pseudo",connexion : true});
        return this.state;
    }

    EventConnected() {      
        return(<form>
            <label>Login </label><input type = "text"></input>
            <label>Mot de Passe </label><input type = "password"></input>
            <button type="buttonI" onClick={()=>this.connexion()}>Connexion</button>
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
}

export default Login;
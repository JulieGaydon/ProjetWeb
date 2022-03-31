import React, { Component } from 'react';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';
import "./Connexion.css";


class Connexion extends Component{
    constructor(props){
        super(props);
        this.state = {connexion : false};
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
        return (<div className = "PagePrincipale">
            {<PagePrincipale/>}
        </div>);
    }

    EventConnected() {      
        return(
        <form>
            <fieldset>
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <img src="papillonLogo.svg"/>
                <label id = "labelC">USERNAME / MAIL</label><input id="inputC" type = "text"></input>   
                <label id = "labelC">PASSWORD</label><input id="inputC" type = "password"></input>
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
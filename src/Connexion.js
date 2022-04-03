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
            <h1 id = "PPtitre">ButterFly</h1>
            <fieldset id = "principal">
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <img src="papillon.jpg"/>
                <input id="inputC" type = "text" placeholder='UserName'></input>   
                <input id="inputC" type = "password" placeholder='Password'></input>
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
import React, { Component } from 'react';
import Inscription from './Inscription';
import Connexion from './Connexion';
import "./PagePrincipale.css";
import MurDeTweets from './MurDeTweets';

class PagePrincipale extends Component{
    constructor(props){
        super(props);
        this.state = {pageCourante : "PagePrincipale",cliqueC : false, cliqueI : false, connexion : false};
        this.connection = this.connection.bind(this);
        this.inscription = this.inscription.bind(this);
        this.changeEtat = this.changeEtat.bind(this);

    }

    // fonction qu'on passera a l'enfant, qui modifiera l'etat de connexion
    changeEtat(value){
        this.setState({cliqueC : false, cliqueI : false, connexion : value})
    }

    connection(){
        this.setState({pageCourante : "Connexion",cliqueC : true,cliqueI : false});
        return this.state;
    }

    inscription(){
        this.setState({pageCourante : "Inscription",cliqueI : true,cliqueC : false}); 
        return this.state;
    }

    EventConnected() {      
        return <>
            <fieldset>
                <h1 id = "PPtitre">Nom du Site</h1>
                <img src="papillonLogo.svg"/>
                <button type="button" id = "bouttonPP" onClick={()=>this.connection()}>Connexion</button>     
                <button type="button" id = "bouttonPP" onClick={()=>this.inscription()}>Inscription</button>
            </fieldset>
            </>; 
    }

    render(){
        if(this.state.connexion === true){
            return (<div className = "MurDeTweets">
                {<MurDeTweets CallBackChangeEtat = {this.changeEtat}/>}
            </div>);
        }
        // On passe en parametre une fonction, qui sera appelee parles composants
        // pour modifier l'etat de connexion, et permettra d'afficher le mur de tweet par la page principale 
        if(this.state.cliqueC === true){
            return (<div className = "Connexion">
                {<Connexion CallBackChangeEtat = {this.changeEtat}/>}
            </div>);
        }
        if(this.state.cliqueI === true){
            return (<div className = "Inscription">
                {<Inscription CallBackChangeEtat = {this.changeEtat}/>}
            </div>);
        }
        if((this.state.connexion === false)||(this.state.cliqueC === false && this.state.cliqueI === false)){
            return this.EventConnected()
        }
    }
    
}

export default PagePrincipale;
import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import Logout from './Logout';
import './Profil.css';

class Utilisateur extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<fieldset id = "profil">
                <button type="button" id = "bouttonProfil" onClick={()=>this.props.CallBackAfficheProfil(false)}>Mur de Tweets</button>
                <button type = "button" id = "bouttonProfil">Modifier</button>
                <button type = "button" id = "bouttonProfil">Abonnement</button>
                <button type = "button" id = "bouttonProfil">Abonnes</button>
                <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat}/>
            <ListeMessage/>
        </fieldset>)
    }
}

export default Utilisateur;
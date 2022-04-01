import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import Logout from './Logout';
import './Profil.css';

class Utilisateur extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
                <button type = "button" id = "bouttonProfil">Modifier</button>
                <button type = "button" id = "bouttonProfil">Abonnement</button>
                <button type = "button" id = "bouttonProfil">Abonnes</button>
                <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat}/>
            <ListeMessage/>
        </div>)
    }
}

export default Utilisateur;
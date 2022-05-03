import React, { Component } from 'react';
import axios from 'axios';
import './ProfilModif.css';


class ProfilModif extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <fieldset id="ProfilModif">
                <img id="photo"src="papillon.jpg"/>
                <button type = "button" id = "Modifier">Modifier</button>
                <input id = "pseudoP" type = "text" placeholder= "Pseudo" name = "pseudo" ></input>
                <input type = "text" id = "nom" placeholder='Nom' name = "nom" ></input>
                <input type = "text" id = "prenom" placeholder= "Prénom" name = "prenom" ></input>  
            </fieldset>
        )}
}

export default ProfilModif;
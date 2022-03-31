import React, { Component } from 'react';
import Logout from './Logout';


class Utilisateur extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <p>{this.props.pseudo}</p>
            <button type = "button">Modifier</button>
            <button type = "button">Abonnement</button>

            <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat}/>
            {/* <ListeMessage/> */}
        </div>)
    }
}

export default Utilisateur;
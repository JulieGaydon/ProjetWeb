import React, { Component } from 'react';

class Utilisateur extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <p>{this.props.pseudo}</p>
            <button type = "button">Modifier</button>
            <button type = "button">Abonnement</button>
            {/* <ListeMessage/> */}
        </div>)
    }
}

export default Utilisateur;
import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';

class Utilisateur extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
          console.log("coucou");
          instance.get('api/user/1')
          .then(res=>{console.log(res)
                    alert(res)})
          .catch(function (error){ console.log(error)})
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
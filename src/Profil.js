import React, { Component } from 'react';
import ListeMessage from './ListeMessage';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';
import FormAddMessage from './FormAddMessage';
import ProfilModif from './ProfilModif'

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
          //get user
          instance.get('api/user/1')
          .then(res=>{console.log(res)
            alert(res)})
            .catch(function (error){ console.log(error)})
          //get message
        //   instance.get('api/message/1')
        //   .then(res=>{console.log(res)
        //             alert(res)})
        //   .catch(function (error){ console.log(error)})
    }

    render(){
        return(
        <fieldset id = "Profil">
            <div id="enteteP">
                <button type="button" id = "bouttonProfil" onClick={()=>this.props.CallBackAfficheProfil(false)}>Mur de Tweets</button>
                <button type = "button" id = "bouttonProfil">Abonnement</button>
                <button type = "button" id = "bouttonProfil">Abonnes</button>
                <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat}/>
            </div> 
            <div id="Abo">
                <p>liste Abonnes</p>
            </div>
            <div id="mess">
                <FormAddMessage/>
                <ListeMessage passerPseudo = {this.props.PPpseudo} tousMessages = {false}/>
            </div>
            <div id="infoP">
                <ProfilModif/>
            </div>
                     
        </fieldset>)
    }
}

export default Utilisateur;
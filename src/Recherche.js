import React, { Component } from 'react';
import MurDeTweetsF from './MurDeTweets';
import './recherche.css';
import axios from 'axios';


class Recherche extends Component{

    constructor(props){
        super(props);
    }
/*
    handleFind(event){
        const instance = axios.exists({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        instance.put('api/user',{Pseudo : "AxouleLaPoule", Message :  this.state.Pseudo})
        .then(function (response){
            console.log("resultat"+response)
            alert(response)
        })
        .catch(function (error){
            console.log(error)
            alert("error"+error)
        })
    }

    */
    render(){
        return (<div id="BarreRecherche">
                    <label id = "recherIn"></label><input type = "text" id = "inputM" ref = "message" placeholder='chercher des abonnés' name = "recherche" ></input>
                    <button id = "rech" >Recherche</button>
                </div> 
        )
    }

}

export default Recherche;
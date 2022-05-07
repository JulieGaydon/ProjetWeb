import React, { useState} from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './recherche.css';
import axios from 'axios';

function Recherche(){
    const[rechercheU, setRechercheU] = useState("");

    const rechercher =() =>{
        const instance = axios.create({
        baseURL: 'http://localhost:4000/',
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/user/'+rechercheU)
        .then(function (response){
            //response.data liste de tous les messages
            console.log("retourne utilisateur recherche:",response.data)
            alert("recherche",response.data.pseudo)
            alert("recherche")
            if(response.data == []){
                return <p>Aucun utilisateur ne correspond a votre recherche</p>
            }else{
                return <p>pseudo utilisateur {response.data.pseudo}</p>
            }
        })
        .catch(function (error){
            console.log("message pas bon")
            alert(error)
            console.log(error)
        })
        alert("fin recherche")
    }

    return (

        <form id="BarreRecherche">
            <div id="message">
                <label id = "recherIn"></label><input type = "text" id = "inputM" onChange={m => setRechercheU(m.target.value)} value = {rechercheU} placeholder='chercher des abonnés' name = "recherche" ></input>
                <button className = "button" id = "rech"  onClick={rechercher}>Recherche</button>
            </div>
        </form>
        )
    }

export default Recherche;
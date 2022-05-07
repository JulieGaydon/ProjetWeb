import React, { useState} from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './FormAddMessage.css';
import axios from 'axios';

function FormAddMessage({passerPseudo}){
    const[message, addMessage] = useState("");

    const publier =() =>{
        const instance = axios.create({
        baseURL: 'http://localhost:4000/',
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
        });
        let p = {passerPseudo}
        console.log("form: " ,message)
        instance.put('api/message',{Pseudo : p.passerPseudo, message : message})
        .then(function (response){
            console.log("resultat",response)
            alert("ca marche",response)
        })
        .catch(function (error){
            console.log(error)
            alert("error",error)
        })
    }

    return(
        <form className = "FormAddMessage" name = "FormAddMessage">
            <div id="message">
                <input onChange={m => addMessage(m.target.value)} id = "inputM" value = {message} placeholder="Ecrire votre message" type = "text"></input>
                <button className = "button" id = "publierM" onClick={publier}>Publier</button>

            </div>
        </form>
    )
    }


export default FormAddMessage;
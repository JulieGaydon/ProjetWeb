import React, { forwardRef, useState} from 'react';
import './message.css';
import axios from 'axios';
import Profil from './Profil';

const Message = forwardRef(
    ({idM, pseudo, message, date, setClic},ref)=>{

        const supprimerM =() =>{
            const instance = axios.create({
                baseURL: 'http://localhost:4000/',
                timeout: 5000,
                headers: {'X-Custom-Header': 'foobar'}
            });
            // on recupere les liens d'amitie
            instance.delete('api/message/'+idM)
            .then(function (response){
                console.log("suppresion message",response)
                alert("Message supprimé")
            })
            .catch(function (error){
                console.log(error)
                alert("error",error)
            })
        }

        return(
            <div className="post" id='Message' ref={ref}>
                {/* boutton suppression message */}
                
                <img id="photo"src="papillon.jpg"/>
                <button className = "button" id = "pseudo" onClick={()=>setClic(pseudo)}>{pseudo}</button>
                {date}
                {/* <input id = "date" type = "date" placeholder="Date" name = "date" value= {this.state.date} onChange= {this.handleChange}></input> */}
                    
            <div id="contenu">
                <button className = "button" id = "pseudo" onClick={()=>supprimerM()}>X</button>
                {message}
            </div>
            </div>
        )
    }
)

export default MessageProfil;
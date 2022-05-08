import React, { forwardRef, useState} from 'react';
import './Message.css';
import axios from 'axios';

const Message = forwardRef(
    ({idM, pseudo, message, date, setClic, page},ref)=>{

        // on peut supprimer nos message que dans notre profil
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
            })
        }

            if(page == 'profil'){
                return(
                    <div className="post" id='cadreMessage' ref={ref}>
                        <div id ="enteteMessage">
                            <img id="photoAmi"src="papillon.jpg"/>
                            <button className = "button" id = "boutonPseudo" onClick={()=>setClic(pseudo)}>@{pseudo}</button>
                            <button id = "boutonSupprimer" onClick={()=>supprimerM()}>X</button>
                        </div>
                        <div id="contenu">
                            {message}
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div className="post" id='cadreMessage' ref={ref}>
                        <div id ="enteteMessage">
                            <img id="photoAmi"src="papillon.jpg"/>
                            <button className = "button" id = "boutonPseudo" onClick={()=>setClic(pseudo)}>@{pseudo}</button>
                        </div>
                            
                        <div id="contenu">
                            {message}
                        </div>
                    </div>
                )
                }
    }
)

export default Message;
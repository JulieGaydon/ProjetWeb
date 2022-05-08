import React, { useState} from 'react';
import Message from './Message';
import './Recherche.css';
import axios from 'axios';

function Recherche({PPpseudo, setClic}){
    const[rechercheU, setRechercheU] = useState("");
    const[posts, setPosts] = useState([]);
    let sauv = []

    const rechercher =(e) =>{
        e.preventDefault();
        let p = {PPpseudo}
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        let i = 0
        sauv = []
        instance.get('api/message/All/'+p.PPpseudo)
        .then(function (response){
            console.log("retourne rechercher all :",response.data)
            while(response.data[i] != undefined){
                var mess = response.data[i].message
                var index = mess.indexOf(rechercheU)
                if(index !== -1){
                    sauv.push(response.data[i])
                    setPosts(sauv.map((doc)=>doc))
                } else{
                    console.log("La sous-chaîne n'existe pas!");
                }
                i = i+1
            }
        })
        .catch(function (error){
            console.log(error)
        })
    }

    return (
        
            <form id="BarreRecherche">
                <div id="message">
                    <input onChange={(e) => setRechercheU(e.target.value)} id = "inputRecherche" value={rechercheU} placeholder="Rechercher" type="text"/>
                    <button onClick={rechercher} type="submit"  id = "boutonRecherche">Rechercher</button>
                </div>

                <div id="retourneM">
                    {posts.map((post) => (
                        <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} date = {post.date} setClic= {setClic}/>
                        ))}
                </div>
            </form>
        
        )
    }

export default Recherche;
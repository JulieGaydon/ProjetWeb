import React, { useState} from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import Message from './Message';
import './recherche.css';
import axios from 'axios';

function Recherche({PPpseudo, setClic}){
    const[rechercheU, setRechercheU] = useState("");
    const[posts, setPosts] = useState([]);
    let sauv = []
    // let posts = []

    const rechercher =(e) =>{
        e.preventDefault();
        let p = {PPpseudo}
        console.log("PPp: ",PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        let i = 0
        sauv = []
        instance.get('api/message/All/'+p.PPpseudo)
        .then(function (response){
            //response.data liste de tous les messages
            console.log("retourne rechercher all :",response.data)
            //doc = 1message
            while(response.data[i] != undefined){
                var mess = response.data[i].message
                console.log("mess",mess)
                console.log("rechercheU",rechercheU)
                var index = mess.indexOf(rechercheU)
                console.log("index",index)
                if(index !== -1){
                    alert("La sous-chaîne existe!");
                    console.log("response.data[i]",response.data)
                    // posts.push(response.data[i])
                    sauv.push(response.data[i])
                    setPosts(sauv.map((doc)=>doc))
                    // setPosts(response.data.map((doc) => doc))
                    console.log("liste posts",posts)
                } else{
                    console.log("La sous-chaîne n'existe pas!");
                }
                i = i+1
            }
            alert("fin while")
        })
        .catch(function (error){
            console.log("message pas bon")
            alert(error)
            console.log(error)
        })
        alert("fin fonction")
    }

    return (
        <div id = "MurDeTweets">
            <form id="BarreRecherche">
            <div id="message">
                <input onChange={(e) => setRechercheU(e.target.value)} id = "inputM" value={rechercheU} placeholder="Ecrivez votre message" type="text"/>
                <button onClick={rechercher} type="submit"  id = "publierM">Rechercher</button>
            </div>
            </form>

            <div id="messM">
            {/* <ListeMessage passerPseudo = {PPpseudo} tousMessages = {true}/> */}
            {console.log("post",posts)}
            {posts.map((post) => (
                <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} date = {post.date} setClic= {setClic}/>
            ))}
            </div>
        </div>
        )
    }

export default Recherche;
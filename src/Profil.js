import React, { useEffect ,useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';
import FormAddMessage from './FormAddMessage';
import Ami from './Ami'
import MurDeTweets from './MurDeTweets';

function Profil ({CallBackChangeEtat, PPpseudo, setClic}){
    const[posts, setPosts] = useState([]);
    const[liens, setLiens] = useState([]);
    const[pseudo, setPseudo] = useState([]);
    const[nom, setNom] = useState([]);
    const[prenom, setPrenom] = useState([]);
    const[mdt, setMur] = useState(false);



    useEffect(()=>{
        let p = {PPpseudo}
        setPseudo(p.PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        //on recupere nos info
        instance.get('api/user/'+p.PPpseudo)
        .then(function (response){
            setNom(response.data[0].nom)
            setPrenom(response.data[0].prenom)
        })
        .catch(function (error){
            console.log(error)
        }) 
        // recupere nos messages
        instance.get('api/message/'+p.PPpseudo)
        .then(function (response){
            setPosts(response.data.map((doc) => doc))
        })
        .catch(function (error){
            console.log(error)
        })
        // recupere les liens d'amitie
        instance.get('api/ami/'+p.PPpseudo)
        .then(function (response){
            setLiens(response.data.map((doc) => doc))
        })
        .catch(function (error){
            console.log(error)
        })
    },[])

    if (mdt == true){
        return(
            <div>
               <MurDeTweets CallBackChangeEtat = {CallBackChangeEtat} PPpseudo = {pseudo}/>
            </div>
        )
    }
    else{
        return(<div>
            <fieldset id = "Profil">
                <div id="enteteP">
                    <button type="button" id = "bouttonMdT" onClick={()=>setMur(true)}>Mur</button>
                    <h2 id = "titre">BUTTERFLY</h2>
                    <Logout CallBackChangeEtat = {CallBackChangeEtat}/>
                </div> 
                <div id="Abo">
                    <h2 id = "ab">Mes Abonnements</h2>
                    <div id="cadreAmis">
                        {liens.map((lien) => (
                            <Ami key = {lien._id} pseudo = {lien.pami}/>
                            ))}
                    </div>
                </div>
                <div id="mess">
                    <FormAddMessage passerPseudo = {pseudo}/>
                    <div id="cadreTweets">
                        {posts.map((post) => (
                            <Message key = {post._id} idM = {post._id} pseudo = {post.pseudo} message = {post.message} setClic= {setClic} page = "profil"/>
                        ))}
                    </div>
                </div>
                <div id="cadreProfil">
                            <img id="photo"src="papillon.jpg"/>
                            <div id="info">
                                <p>@{pseudo}</p>
                                <p>{nom}</p>
                                <p>{prenom}</p>
                            </div>
                </div>
                        
            </fieldset>
            </div>
            )
    }
}

export default Profil;
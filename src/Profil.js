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
    const[mdt, setMur] = useState(false);



    useEffect(()=>{
        let p = {PPpseudo}
        console.log("PPp: ",PPpseudo)
        setPseudo(p.PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        // recupere nos messages
        instance.get('api/message/'+p.PPpseudo)
        .then(function (response){
            //response.data liste de tous les messages
            console.log("retourne :",response.data)
            //doc = 1message
            setPosts(response.data.map((doc) => doc))
        })
        .catch(function (error){
            console.log("message pas bon")
            alert(error)
            console.log(error)
        })
        // recupere les liens d'amitie
        instance.get('api/ami/'+p.PPpseudo)
        .then(function (response){
            //response.data liste de tous les messages
            console.log("retourne :",response.data)
            //doc = 1message
            setLiens(response.data.map((doc) => doc))
        })
        .catch(function (error){
            alert(error)
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
                    <Logout CallBackChangeEtat = {CallBackChangeEtat}/>
                </div> 
                <div id="Abo">
                    <p>liste Abonnes</p>
                    {liens.map((lien) => (
                        <Ami key = {lien._id} pseudo = {lien.pami}/>
                        ))}
                </div>
                <div id="mess">
                <FormAddMessage passerPseudo = {pseudo}/>
                        {/* <ListeMessage passerPseudo = {PPpseudo} tousMessages = {true}/> */}
                        {console.log("post:",posts)}
                        {posts.map((post) => (
                            <Message key = {post._id} idM = {post._id} pseudo = {post.pseudo} message = {post.message} setClic= {setClic} page = "profil"/>
                        ))}
                </div>
                <fieldset id="ProfilModif">
                    <img id="photo"src="papillon.jpg"/>
                    <button type = "button" id = "Modifier">Modifier</button>
                    <input id = "pseudoP" type = "text" placeholder= "Pseudo" name = "pseudo" ></input>
                    <input type = "text" id = "nom" placeholder='Nom' name = "nom" ></input>
                    <input type = "text" id = "prenom" placeholder= "Prénom" name = "prenom" ></input>  
                </fieldset>
                        
            </fieldset>
            </div>
            )
    }
}

export default Profil;
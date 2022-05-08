import React, { useEffect ,useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';
import MurDeTweets from './MurDeTweets';

function ProfilAmi ({CallBackChangeEtat, PPpseudo, pseudoA, setClic}){
    const[posts, setPosts] = useState([]);
    const[pseudo, setPseudo] = useState([]);
    const[mdt, setMur] = useState(false);

    const ajouter =() =>{
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        // on recupere les liens d'amitie
        instance.get('api/ami/'+PPpseudo)
        .then(function (response){
            console.log("resultat response :",response.data)
            let i=0
            let dejaAmi = false
            // on regarde si on est ami avec la personne
            while(response.data[i] != undefined){
                if(pseudoA == response.data[i].pami){
                    dejaAmi = true
                    // on supprime lien amitier
                    instance.delete('api/ami/'+response.data[i]._id)
                    .then(function (response){
                        console.log("suppresion lien amitie",response)
                        alert("Desabonné")
                    })
                    .catch(function (error){
                        console.log(error)
                    })
                    
                    break
                }
                i = i+1
            }
            // si on est pas ami, on creer le lien d'amitie
            if(dejaAmi == false){
                instance.put('api/ami',{ Pseudo :PPpseudo, Pami : pseudoA})
                .then(function (response){
                    console.log("resultat",response)
                    alert("Abonné !")
                })
                .catch(function (error){
                    console.log(error)
                    alert("error",error)
                })
            }
        })
        .catch(function (error){
            console.log(error)
        })

    }
    
    // recuperer message du profil ami
    useEffect(()=>{
        let p = {pseudoA}
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/message/'+p.pseudoA)
        .then(function (response){
            setPosts(response.data.map((doc) => doc))
        })
        .catch(function (error){
            console.log(error)
        })
    },[])

    if (mdt == true){
        return(
            <div>
               <MurDeTweets CallBackChangeEtat = {CallBackChangeEtat} PPpseudo = {PPpseudo}/>
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
                <div id="mess">
                    {posts.map((post) => (
                        <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} setClic= {setClic}/>
                    ))}
                </div>
                <div id="cadreProfil">
                    <img id="photo"src="papillon.jpg"/>
                    <div id="info">
                        <p>@{pseudoA}</p>
                        <button type = "button" id = "bouttonProfil" onClick={ajouter}>Ajouter</button>
                    </div>
                </div>
                        
            </fieldset>
            </div>
            )
    }
}

export default ProfilAmi;
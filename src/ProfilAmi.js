import React, { useEffect ,useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';
import FormAddMessage from './FormAddMessage';
import ProfilModif from './ProfilModif'
import MurDeTweets from './MurDeTweets';

function ProfilAmi ({CallBackChangeEtat, PPpseudo, pseudoA, setClic}){
    const[posts, setPosts] = useState([]);
    const[pseudo, setPseudo] = useState([]);
    const[mdt, setMur] = useState(false);
    // const[dejaAmi, setDejaAmi] = useState(false);
    // const[Pami, addAmi] = useState([]);

    const ajouter =() =>{
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        // on recupere les liens d'amitie
        instance.get('api/ami/'+PPpseudo)
        .then(function (response){
            //response.data liste de tous les messages
            alert("resultat response :",response.data)
            console.log("resultat response :",response.data)
            let i=0
            let dejaAmi = false
            // on regarde si on est ami avec la personne
            while(response.data[i] != undefined){
                console.log("response.data[i].pami",response.data[i].pami)
                if(pseudoA == response.data[i].pami){
                    console.log("deja ami")
                    dejaAmi = true
                    // on supprime lien amitier
                    instance.delete('api/ami/'+response.data[i]._id)
                    .then(function (response){
                        console.log("suppresion lien amitie",response)
                        alert("Desabonné")
                    })
                    .catch(function (error){
                        console.log(error)
                        alert("error",error)
                    })
                    
                    break
                }
                i = i+1
            }
            console.log("deja ami",dejaAmi)
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
            alert("fonction get ami",error)
            console.log(error)
        })

    }
    
    // recuperer message du profil ami
    useEffect(()=>{
        let p = {pseudoA}
        console.log("PPp: ",pseudoA)
        // setPseudo(p.PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/message/'+p.pseudoA)
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
                    <Logout CallBackChangeEtat = {CallBackChangeEtat}/>
                </div> 
                <div id="mess">
                    {console.log("post:",posts)}
                    {posts.map((post) => (
                        <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} setClic= {setClic}/>
                    ))}
                </div>
                <div id="infoP">
                    <button type = "button" id = "bouttonProfil" onClick={ajouter}>Ajouter</button>
                </div>
                        
            </fieldset>
            </div>
            )
    }
}

export default ProfilAmi;
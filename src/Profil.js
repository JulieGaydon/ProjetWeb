import React, { useEffect ,useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Logout from './Logout';
import './Profil.css';
import FormAddMessage from './FormAddMessage';
import ProfilModif from './ProfilModif'
import MurDeTweets from './MurDeTweets';

function Profil ({CallBackChangeEtat, PPpseudo}){
    const[posts, setPosts] = useState([]);
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
                    <button type = "button" id = "bouttonProfil">Abonnement</button>
                    <button type = "button" id = "bouttonProfil">Abonnes</button>
                    <Logout CallBackChangeEtat = {CallBackChangeEtat}/>
                </div> 
                <div id="Abo">
                    <p>liste Abonnes</p>
                </div>
                <div id="mess">
                <FormAddMessage passerPseudo = {pseudo}/>
                        {/* <ListeMessage passerPseudo = {PPpseudo} tousMessages = {true}/> */}
                        {console.log("post:",posts)}
                        {posts.map((post) => (
                            <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} />
                        ))}
                </div>
                <div id="infoP">
                    <ProfilModif/>
                </div>
                        
            </fieldset>
            </div>
            )
    }
}

export default Profil;
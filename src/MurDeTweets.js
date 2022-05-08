import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import FormAddMessage from './FormAddMessage';
import Profil from './Profil';
import ProfilAmi from './ProfilAmi';
import Logout from './Logout';
import Recherche from './Recherche';
import './MurDeTweets.css';
import Message from './Message';

function MurDeTweets ({CallBackChangeEtat, PPpseudo}){
    const[posts, setPosts] = useState([]);
    // si false -> mur tweet , true -> profil
    const[profil, setProfil] = useState(false);
    const[clicProfil, setClic] = useState("");
    const[pppseudo, setPseudo] = useState("");

    useEffect(()=>{
        let p = {PPpseudo}
        setPseudo(p.PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/message/All/'+p.PPpseudo)
        .then(function (response){
            console.log("retourne :",response.data)
            setPosts(response.data.map((doc) => doc))
        })
        .catch(function (error){
            console.log(error)
        })
    },[])

        if(clicProfil != pppseudo && clicProfil != ""){
            return(
                <div>
                <ProfilAmi CallBackChangeEtat = {CallBackChangeEtat} PPpseudo = {pppseudo} pseudoA = {clicProfil} setClic= {setClic} />
                </div>
            )
        }
        else if (profil === true ||( clicProfil == pppseudo && pppseudo != "")){
            return(
                <div>
                   <Profil CallBackChangeEtat = {CallBackChangeEtat} PPpseudo = {pppseudo} setClic= {setClic}/>
                </div>
            )
        }
        else{
            return(
                <div id = "MurDeTweets">
                    <div id="enteteMur">
                        <img src="papillon.jpg"/>
                        <h2 id = "titre">BUTTERFLY</h2>
                        <Logout CallBackChangeEtat = {CallBackChangeEtat} />                     
                    </div>
                    <div id="cardeGauche">
                        <div id="cadreProfil">
                            <img id="photo"src="papillon.jpg"/>
                            <div id="info">
                                <p>@{pppseudo}</p>
                                <button type="button" id = "bouttonMdT" onClick={()=>setProfil(true)}>Profil</button>
                            </div>
                        </div>
                        <div id="recherche">
                            <Recherche PPpseudo = {pppseudo} setClic= {setClic}/>
                        </div>
                    </div>
                    <div id="messM">
                        <FormAddMessage passerPseudo = {pppseudo}/>
                        <div id="cadreTweets">
                            {posts.map((post) => (
                                <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} date = {post.date} setClic= {setClic}/>
                                ))}
                        </div>

                    </div>
                </div>
            )
            
        }
        
  }

export default MurDeTweets;
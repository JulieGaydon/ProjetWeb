import React, { useEffect ,useState } from 'react';
import axios from 'axios';
import FormAddMessage from './FormAddMessage';
import ListeMessage from './ListeMessage';
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
        console.log("PPp: ",PPpseudo)
        setPseudo(p.PPpseudo)
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/message/All/'+p.PPpseudo)
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
    // {clicProfil}
    console.log("clic :",clicProfil, profil, pppseudo)
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
                <div id="enteteM">
                    <button type="button" id = "bouttonMdT" onClick={()=>setProfil(true)}>Profil</button>
                    <Logout CallBackChangeEtat = {CallBackChangeEtat} />                     
                </div>
            
                <div id="recherche">
                    <Recherche/>
                </div>
                
                <div id="messM">
                    <FormAddMessage passerPseudo = {pppseudo}/>
                    {/* <ListeMessage passerPseudo = {PPpseudo} tousMessages = {true}/> */}
                    {console.log("post:",posts)}
                    {posts.map((post) => (
                        <Message key = {post._id} pseudo = {post.pseudo} message = {post.message} setClic= {setClic}/>
                    ))}

                </div>
            </div>)
            
        }
            {/*on aura une barre de recherche pour chercher des personnes et il faut rajouter des choses*/}
           
        
  }
// class MurDeTweets extends Component{
//     constructor(props){
//         super(props);
//         this.state = {afficheP : false, ecrireM : false}
//         // props.addMessage({m : "TestMessage"})
//         // this.processNewMessage= this.processNewMessage.bind(this)
//         this.afficheProfil= this.afficheProfil.bind(this)
//         // this.ecrireMessage= this.ecrireMessage.bind(this)
//     }

//     // processNewMessage(m){
//     //     this.setState((state)=>{state.ListeM.push(m);
//     //     return state;})
//     // }

//     afficheProfil(value){
//         this.setState({afficheP : value});
//         return this.state;
//     }

//     ecrireMessage(value){
//         this.setState({ecrireM : value});
//         return this.state;
//     }

//     render(){
//         if(this.state.afficheP === true){
//             return (<div className = "Profil">
//                 {<Profil passerPseudo = {this.props.PPpseudo} CallBackChangeEtat = {this.props.CallBackChangeEtat} CallBackAfficheProfil = {this.afficheProfil}/>}
//             </div>);
//         }
//         // if(this.state.ecrireM === true){
//         //     return (<div className = "FormAddMessage">
//         //         {<FormAddMessage CallBackEcrireMessage = {this.ecrireMessage}/>}
//         //     </div>);
//         // }
//         else{
//             return(
//                 <fieldset id = "MurDeTweets">
//                     <div id="enteteM">
//                         <button type="button" id = "bouttonMdT" onClick={()=>this.afficheProfil(true)}>Profil</button>
//                         <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat} />
//                     </div>
//                     <div id="recherche">
//                         <Recherche/>
//                     </div>
//                     <div id="messM">
//                         <FormAddMessage passerPseudo = {this.props.PPpseudo}/>
//                         <ListeMessage passerPseudo = {this.props.PPpseudo} tousMessages = {true}/>
//                     </div>
//                     <div id="question">

//                     </div>
//                 </fieldset>

                    
//                 )
//         }
//     }
// }

export default MurDeTweets;
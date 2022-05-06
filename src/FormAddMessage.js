import React, { useState} from 'react';
import ListeMessage from './ListeMessage';
import MurDeTweetsF from './MurDeTweets';
import './FormAddMessage.css';
import axios from 'axios';

function FormAddMessage({passerPseudo}){
    const[message, addMessage] = useState("");

    const publier =(m) =>{
        const instance = axios.create({
        baseURL: 'http://localhost:4000/',
        timeout: 5000,
        headers: {'X-Custom-Header': 'foobar'}
        });
        let p = {passerPseudo}
        console.log("form: " ,message)
        instance.put('api/message',{Pseudo : p.passerPseudo, message : message})
        .then(function (response){
            console.log("resultat",response)
            alert(response)
        })
        .catch(function (error){
            console.log(error)
            alert("error",error)
        })
    }

        return(
            <form className = "FormAddMessage" name = "FormAddMessage">
                <div id="message">
                    <label id = "LabelM"></label>
                    <input onChange={(m)=> addMessage(m.target.value)} id = "inputM" value = {message} placeholder="Ecrire votre message" type = "text"></input>
                    {/* <input type = "text" id = "inputM" ref = "message" placeholder='Ecrire votre message' name = "message" value= {message} onChange= {handleChange}></input> */}
                    {/* <button className = "button" id = "publierM" onClick={()=>handleSubmit()}>Publier</button> */}
                    <button className = "button" id = "publierM" onClick={publier}>Publier</button>

                </div>
            </form>
        )
    }

// class FormAddMessage extends Component{

//     constructor(props){
//         super(props);
//         this.state = {message : "", pseudo : "", connexion : true}
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     // publierM(value){
//     //     // fonction ajout message a base de donnees
//     //     // this.props.addMessage(value)
//     //     this.props.CallBackEcrireMessage(false)
//     //     return this.state;
//     // }
    



    
    

//     render(){
//         if(this.state.connexion === true){
//             return this.EventConnected()
//         }
//     }

// }

export default FormAddMessage;
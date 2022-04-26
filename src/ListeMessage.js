import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import Message from './Message';
import axios from 'axios';

import './ListeMessage.css';

class ListeMessage extends Component{
    constructor(props){
        super(props);
        // this.state = {ListeM : [{mess : "Hello"},{mess : "How are you"}]}
        this.state = {ListeM : [], pseudo : ""}
        console.log("pseudo LM : ",this.props.passerPseudo)
        // this.setState(this.ListM = props.mess)
    }

    // componentDidMount(){
    //     this.setState({pseudo : this.props.passerPseudo})
    //     console.log("pseudo LM : ",this.state.pseudo)
    // }

    // addMessage(message){
    //     console.log("addMessage")
    //     this.setState({ListeM : this.ListeM.push(message)})
    // }

    componentDidMount(){
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        // instance.get('api/message/1')
        let p = this.props.passerPseudo
        console.log(p)
        const tab = []
        instance.get('api/message/pseudo',{Pseudo : p})
        .then(function (response){
            console.log("message okk tout est bon")
            let i = 0
            console.log("resultat",response.data)
            while(response.data[i] != undefined){
                // on insere le message dans la liste
                console.log("mess",response.data[i].message)
                tab.push(response.data[i])
                i = i+1
            }
            alert(response)
        })
        .catch(function (error){
            console.log("message pas bon")
            alert(error)
            console.log(error)
        })
        console.log("tab",tab)
        // on met a jour l'etat
        this.setState({ListeM : tab})
    }

    render(){
        // console.log("tab",this.state.ListeM)
        // let i =0
        // while(this.state.ListeM[i] != undefined){
            return(<div >
                        <h1 id = "PPtitre">Messages</h1>
                        {/* <p>{this.state.ListeM[i].pseudo}</p>
                        <p>{this.state.ListeM[i].message}</p> */}
                    </div>
            )
        //     i += 1
        // }
    }
}

export default ListeMessage;
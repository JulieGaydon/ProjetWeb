// import React, { Component } from 'react';
// import FormAddMessage from './FormAddMessage';
// import Message from './Message';
// import axios from 'axios';
// import './ListeMessage.css';
import React, { useState,setPosts, useEffect } from 'react';

function ListeMessage(props){
    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        let p = this.props.passerPseudo
        const instance = axios.create({
            baseURL: 'http://localhost:4000/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        instance.get('api/message/'+p)
        .then(function (response){
            console.log("retourne :",response.data)
            setPosts(response.map(doc => doc.data()))
        })
        .catch(function (error){
            console.log("message pas bon")
            alert(error)
            console.log(error)
        })
    },[])
}


// class ListeMessage extends Component{
//     constructor(props){
//         super(props);
//         // this.state = {ListeM : [{mess : "Hello"},{mess : "How are you"}]}
//         this.state = {pseudo : "", message : []}
//         // this.state = {ListeM : [], pseudo : ""}
//         // console.log("pseudo LM : ",this.props.passerPseudo)
//         this.handleChange = this.handleChange.bind(this);
//         // this.setState(this.ListM = props.mess)
//     }

//     // componentDidMount(){
//     //     this.setState({pseudo : this.props.passerPseudo})
//     //     console.log("pseudo LM : ",this.state.pseudo)
//     // }

//     addMessage(m){
//         console.log("addMessage")
//         this.setState({message : this.message.push(m)})
//     }

//     handleChange(p){
//         // let p = this.props.passerPseudo
//         console.log("pseudo ListeMessage p:",p)
//         this.setState({pseudo : p})
//         console.log("pseudo ListeMessage state:",this.state.pseudo)
//     }

//     componentDidMount(){
//         console.log("useeffect")
//         let p = this.props.passerPseudo
//         this.handleChange(p)
//         const instance = axios.create({
//             baseURL: 'http://localhost:4000/',
//             timeout: 1000,
//             headers: {'X-Custom-Header': 'foobar'}
//         });
//         const m = ''
//         instance.get('api/message/'+p)
//         // .then(function (response){
//         .then(function (response){
//             console.log("retourne :",response.data)
//             // this.addMessage(response.map(doc => doc.data()))
//             m = (response.map(doc => doc.data()))
//         })
//         .catch(function (error){
//             console.log("message pas bon")
//             alert(error)
//             console.log(error)
//         })
//         this.setState({message : m})
//     }

//     // componentDidMount(){
//     //     const instance = axios.create({
//     //         baseURL: 'http://localhost:4000/',
//     //         timeout: 1000,
//     //         headers: {'X-Custom-Header': 'foobar'}
//     //     });
//     //     // instance.get('api/message/1')
//     //     let p = this.props.passerPseudo
//     //     // this.setState({pseudo : p})
//     //     this.handleChange(p)
//     //     // console.log("pseudo state :", this.state.pseudo)
//     //     // console.log("pseudo p listeM",p)
//     //     const tab = []
//     //     // faire un get !
//     //     // instance.put('api/message/pseudo',{Pseudo : p})
//     //     console.log("pseudo p",p)
//     //     instance.get('api/message/'+p)
//     //     .then(function (response){
//     //         console.log("message okk tout est bon")
//     //         let i = 0
//     //         // on recupere les messages
//     //         console.log("resultat",response.data)
//     //         // on les ajoute a la liste
//     //         // while(response.data[i] != undefined){
//     //             // on insere le message dans la liste
//     //             // console.log("mess",response.data[i].message)
//     //         //     tab.push(response.data[i])
//     //         //     i = i+1
//     //         // }
//     //         tab.push(response.data)
//     //         console.log("message CDM ",tab)
//     //         alert(response)
//     //     })
//     //     .catch(function (error){
//     //         console.log("message pas bon")
//     //         alert(error)
//     //         console.log(error)
//     //     })
//     //     // console.log("tab 1",tab)
//     //     // on met a jour l'etat
//     //     this.setState({ListeM : tab})
//     // }
    
//     render(){
//         // console.log("this.state.listeM render",this.state.ListeM)
//             return(<div >
//                 {/* {(this.state.ListeM).map(m =>( */}
//                     {/* <Message mess = {m}/>
//                 ))} */}
//                  {/* <Message mess = {this.state.ListeM}/> */}
//                 {this.state.message.map(post =>(
//                     <Message pseudo = {post.pseudo} mess = {post.message}/>
//                 ))}
//                 </div>
//             )
//     }
// }

export default ListeMessage;
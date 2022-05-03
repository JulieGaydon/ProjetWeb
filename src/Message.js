import React, { Component } from 'react';
import './message.css';

class Message extends Component{
    constructor(props){
        super(props);
        // this.state = {m : props.m}
        this.state = {liste : this.props.listeMessageLM}
        console.log("liste dans message :",this.state.liste)
        console.log("liste props message :", this.props.listeMessageLM)
    }

    // liste(){
    //     listeMessageLM
    // }

    handleMessageClick(){
        this.setState = {m : this.state.m}
    }

    render(){
        return(<div id='Message' onClick = {()=> this.handleMessageClick()}>{this.props.m}
            
            <img id="photo"src="papillon.jpg"/>
           
            <input id = "pseudo" type = "text" placeholder="Pseudo" name = "pseudo" value= {this.state.pseudo} onChange= {this.handleChange}></input>
            <input id = "date" type = "date" placeholder="Date" name = "date" value= {this.state.date} onChange= {this.handleChange}></input>
        
            <div id="contenu">
            <text id = "Mess" type = "text" placeholder="Message" name = "message" value= {this.state.message} onChange= {this.handleChange}></text>
            </div>
        </div>)
    }
}

export default Message;
import React, { Component } from 'react';
import './message.css';

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {pseudo :"", mess : ""}
        this.setState({pseudo : this.props.pseudo})
        this.setState({mess : this.props.messo})
        // mess= this.props.mess
        // this.state = {m : props.m}
        // console.log("liste props message :", this.props.mess)
    }

    // liste(){
    //     listeMessageLM
    // }

    // handleMessageClick(){
    //     this.setState = {m : this.state.m}
    // }

    render(){
        return (<div className='post'>
                    <div className='header'>
                        <div className='text'>
                            <h3>
                                {this.state.pseudo}
                            </h3>
                        </div>
                        <div className='post text'>
                            <p>{this.state.text}</p>
                        </div>
                    </div>
                </div>
                )
    }

    // render(){
    //     return(<div id='Message' onClick = {()=> this.handleMessageClick()}>{this.props.m}
            
    //         <img id="photo"src="papillon.jpg"/>
        
    //         <input id = "pseudo" type = "text" placeholder="Pseudo" name = "pseudo" value= {this.state.pseudo} onChange= {this.handleChange}></input>
    //         <input id = "date" type = "date" placeholder="Date" name = "date" value= {this.state.date} onChange= {this.handleChange}></input>
        
    //         <div id="contenu">
    //         <text id = "Mess" type = "text" placeholder="Message" name = "message" value= {this.state.message} onChange= {this.handleChange}></text>
    //         </div>
    //     </div>)
    // }
}

export default Message;
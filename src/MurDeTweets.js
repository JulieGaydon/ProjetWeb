import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import ListeMessage from './ListeMessage';
import Profil from './Profil';
import Logout from './Logout';

class MurDeTweets extends Component{
    constructor(props){
        super(props);
        this.state = {afficheP : false, ecrireM : false}
        // props.addMessage({m : "TestMessage"})
        this.processNewMessage= this.processNewMessage.bind(this)
        this.afficheProfil= this.afficheProfil.bind(this)
        this.ecrireMessage= this.ecrireMessage.bind(this)
    }

    processNewMessage(m){
        this.setState((state)=>{state.ListeM.push(m);
        return state;})
    }

    afficheProfil(){
        this.setState({afficheP : true});
        return this.state;
    }

    ecrireMessage(value){
        this.setState({ecrireM : value});
        return this.state;
    }

    render(){
        if(this.state.afficheP === true){
            return (<div className = "Profil">
                {<Profil CallBackChangeEtat = {this.props.CallBackChangeEtat}/>}
            </div>);
        }
        if(this.state.ecrireM === true){
            return (<div className = "FormAddMessage">
                {<FormAddMessage CallBackEcrireMessage = {this.ecrireMessage}/>}
            </div>);
        }
        else{
            return(<div className='MurDeTweets'>
                <ListeMessage ListeM />
                <button type="button" onClick={()=>this.ecrireMessage(true)}>addMessage</button>

                <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat} />
                <button type="button" onClick={()=>this.afficheProfil()}>Profil</button>
            </div>)
        }
    }
}

export default MurDeTweets;
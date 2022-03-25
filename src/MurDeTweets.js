import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import ListeMessage from './ListeMessage';

class MurDeTweets extends Component{
    constructor(props){
        super(props);
        // props.addMessage({m : "TestMessage"})
        this.processNewMessage= this.processNewMessage.bind(this)
    }

    processNewMessage(m){
        this.setState((state)=>{state.ListeM.push(m);
        return state;})
    }

    render(){
        return(<div className='MurDeTweets'>
            <ListeMessage ListeM />
            <FormAddMessage addMessage={this.processNewMessage}/>
        </div>)
    }
}

export default MurDeTweets;
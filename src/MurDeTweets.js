import React, { Component } from 'react';
import FormAddMessage from './FormAddMessage';
import ListeMessage from './ListeMessage';
import Profil from './Profil';
import Logout from './Logout';
import Recherche from './Recherche';
import './MurDeTweets.css';

class MurDeTweets extends Component{
    constructor(props){
        super(props);
        this.state = {afficheP : false, ecrireM : false}
        // props.addMessage({m : "TestMessage"})
        // this.processNewMessage= this.processNewMessage.bind(this)
        this.afficheProfil= this.afficheProfil.bind(this)
        // this.ecrireMessage= this.ecrireMessage.bind(this)
    }

    // processNewMessage(m){
    //     this.setState((state)=>{state.ListeM.push(m);
    //     return state;})
    // }

    afficheProfil(value){
        this.setState({afficheP : value});
        return this.state;
    }

    ecrireMessage(value){
        this.setState({ecrireM : value});
        return this.state;
    }

    render(){
        if(this.state.afficheP === true){
            return (<div className = "Profil">
                {<Profil passerPseudo = {this.props.PPpseudo} CallBackChangeEtat = {this.props.CallBackChangeEtat} CallBackAfficheProfil = {this.afficheProfil}/>}
            </div>);
        }
        // if(this.state.ecrireM === true){
        //     return (<div className = "FormAddMessage">
        //         {<FormAddMessage CallBackEcrireMessage = {this.ecrireMessage}/>}
        //     </div>);
        // }
        else{
            return(
                <fieldset id = "MurDeTweets">
                    <div id="enteteM">
                        <button type="button" id = "bouttonMdT" onClick={()=>this.afficheProfil(true)}>Profil</button>
                        <Logout CallBackChangeEtat = {this.props.CallBackChangeEtat} />
                    </div>
                    <div id="recherche">
                        <Recherche/>
                    </div>
                    <div id="messM">
                        <FormAddMessage passerPseudo = {this.props.PPpseudo}/>
                        <ListeMessage passerPseudo = {this.props.PPpseudo} tousMessages = {true}/>
                    </div>
                    <div id="question">

                    </div>
                </fieldset>

                    
                )
        }
    }
}

export default MurDeTweets;
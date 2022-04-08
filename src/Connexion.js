import React, { Component } from 'react';
import axios from 'axios';
import MurDeTweets from './MurDeTweets';
import PagePrincipale from './PagePrincipale';
import "./Connexion.css";

class Connexion extends Component{
    constructor(props){
        super(props);
        this.state = {connexion : false};
    }

    annulation() {
        this.props.CallBackChangeEtat(false)
        return (<div className = "PagePrincipale">
            {<PagePrincipale/>}
        </div>);
    }

    // componentDidMount(){
    //     const instance = axios.create({
    //         baseURL: 'http://localhost:4000/',
    //         timeout: 1000,
    //         headers: {'X-Custom-Header': 'foobar'}
    //       });
    //       console.log("coucou");
    //       instance.get('api/user/1').then(res=>{
    //         console.log(res);
    //     })
    // }

    EventConnected() {      
        return(
        <form>
            <h1 id = "PPtitre">ButterFly</h1>
            <fieldset id = "principal">
                <button type="button" id = "annuler" onClick={()=>this.annulation()}>X</button>
                <img src="papillon.jpg"/>
                <input id="inputC" type = "text" placeholder='UserName'></input>   
                <input id="inputC" type = "password" placeholder='Password'></input>
                <button type="button" id = "connexion" onClick={() => this.props.CallBackChangeEtat(true)}>Connexion</button>
                {/* <button type="button" id = "connexion" onClick={this.componentDidMount}>Connexion</button> */}
            </fieldset>
        </form>
        )
    }

    render(){
        if(this.state.connexion === false){
            return this.EventConnected()
        }
    }
}

export default Connexion;
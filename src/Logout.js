import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button type="button" id="Blogout" onClick={()=>this.props.CallBackChangeEtat(false)}>Deconnexion</button>     
        )}
}

export default Logout;
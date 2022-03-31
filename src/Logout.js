import React, { Component } from 'react';

class Logout extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button type="buttonD" onClick={()=>this.props.CallBackChangeEtat(false)}>Deconnexion</button>     
        )}
}

export default Logout;
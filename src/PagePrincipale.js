import React, { Component } from 'react';
import Signin from './Signin';
import Login from './Login';

class PagePrincipale extends Component{
    constructor(props){
        super(props);
        this.state = {pageCourante : "PagePrincipale",cliqueC : false, cliqueI : false};
        this.connection = this.connection.bind(this);
        this.inscription = this.inscription.bind(this);
    }

    connection(){
        this.setState({pageCourante : "Login",cliqueC : true,cliqueI : false});
        return this.state;
    }

    inscription(){
        this.setState({pageCourante : "Signin",cliqueI : true,cliqueC : false}); 
        return this.state;
    }

    EventConnected() {      
        return <>   
            <button type="buttonC" onClick={()=>this.connection()}>Connexion</button>     
            <button type="buttonI" onClick={()=>this.inscription()}>Inscription</button>
            </>; 
    }

    render(){
        if(this.state.cliqueC === false && this.state.cliqueI === false){
            return this.EventConnected()
        }
        if(this.state.cliqueC === true){
            return (<div className = "Login">
                {<Login/>}
            </div>);
        }
        if(this.state.cliqueI === true){
            return (<div className = "Signin">
                {<Signin/>}
            </div>);
        }
    }
    
}

export default PagePrincipale;
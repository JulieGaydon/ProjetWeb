import React, { Component } from 'react';
import Inscription from './Inscription';
import Connexion from './Connexion';
import "./PagePrincipale.css";

class PagePrincipale extends Component{
    constructor(props){
        super(props);
        this.state = {pageCourante : "PagePrincipale",cliqueC : false, cliqueI : false};
        this.connection = this.connection.bind(this);
        this.inscription = this.inscription.bind(this);
    }

    connection(){
        this.setState({pageCourante : "Connexion",cliqueC : true,cliqueI : false});
        return this.state;
    }

    inscription(){
        this.setState({pageCourante : "Inscription",cliqueI : true,cliqueC : false}); 
        return this.state;
    }

    EventConnected() {      
        return <>   
            <fieldset>
                <img src="papillonLogo.svg"/>
                <b>
                    <button type="buttonC" onClick={()=>this.connection()}>Connexion</button>     
                    <button type="buttonI" onClick={()=>this.inscription()}>Inscription</button>
                </b>
            </fieldset>
            </>; 
    }

    render(){
        if(this.state.cliqueC === false && this.state.cliqueI === false){
            return this.EventConnected()
        }
        if(this.state.cliqueC === true){
            return (<div className = "Connexion">
                {<Connexion/>}
            </div>);
        }
        if(this.state.cliqueI === true){
            return (<div className = "Inscription">
                {<Inscription/>}
            </div>);
        }
    }
    
}

export default PagePrincipale;
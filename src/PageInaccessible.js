import React, { Component } from 'react';
import './PageInaccessible.css'

class PageInaccessible extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<div>

            <div id = "Pi">
                <h1 id = "PageI">Page Inaccessible</h1>
                <h1 id = "PageI">Vous ne pouvez pas revenir en arriere</h1>
            </div>
            <button type="button" id = "bouttonPI" onClick={()=>this.props.CallBackAnnulation("PagePrincipale")}>Revenir à la page principale</button>
        </div>);
    }
}

export default PageInaccessible;
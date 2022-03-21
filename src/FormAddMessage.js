import React, { Component } from 'react';

class FormAddMessage extends Component{

    constructor(props){
        super(props);
        props.addMessage({ m : "hola"})
    }

    render(){
        return (<form className = "FormAddMessage">
            <label>message </label><input type = "text" ref = "message"></input>
            <button className = "button" onClick = {(event =>this.send())}></button>
        </form>
        )
    }

}

export default FormAddMessage;
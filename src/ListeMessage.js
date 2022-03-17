import React, { Component } from 'react';
import Message from './Message'

// const ListeMessage = ({Lmessages})
//     =>(
//         <div className = 'ListeMessage'>
//             {Lmessages.maps(Message =>( 
//                 <Message message = {Message}/>
//             ))}
//         </div>
//     )

class ListeMessage extends Component{
    constructor(props){
        super(props);
        this.setState({Message : [{message : "Hello"},{message : "How are you"}]})
    }

    render(){
        return(<div className = "ListeMessage">
            {Message.map(Message => (
                <Message Message = {Message}/>)
            )}
        </div>)
    }
}

export default ListeMessage;
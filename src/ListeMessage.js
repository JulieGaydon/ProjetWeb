import React, { Component } from 'react';
import Message from './Message'

const ListeMessage = ({Lmessages})
    =>(
        <div className = 'ListeMessage'>
            {Lmessages.maps(Message =>( 
                <Message message = {Message}/>
            ))}
        </div>
    )

export default ListeMessage;
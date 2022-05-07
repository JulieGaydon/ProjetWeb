import React, { forwardRef, useState} from 'react';
import './message.css';
import Profil from './Profil';

const Message = forwardRef(
    ({pseudo, message, setClic},ref)=>{

        return(
            <div className="post" id='Message' ref={ref}>
                
                <img id="photo"src="papillon.jpg"/>
                <button className = "button" id = "pseudo" onClick={()=>setClic(pseudo)}>{pseudo}</button>
                
                {/* <input id = "date" type = "date" placeholder="Date" name = "date" value= {this.state.date} onChange= {this.handleChange}></input> */}
                    
            <div id="contenu">
                {message}
            </div>
            </div>
        )
    }
)

export default Message;
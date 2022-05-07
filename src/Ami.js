import React, { forwardRef, useState} from 'react';
import './message.css';
import Profil from './Profil';

const Ami = forwardRef(
    ({pseudo},ref)=>{

        return(
            <div className="post" id='Message' ref={ref}>
                
                <img id="photo"src="papillon.jpg"/>
                <button className = "button" id = "pseudo">{pseudo}</button>
        
            </div>
        )
    }
)

export default Ami;
import React, { forwardRef, useState} from 'react';
import './Message.css';
import './Ami.css';

const Ami = forwardRef(
    ({pseudo},ref)=>{

        return(
            <div className="post" id='ami' ref={ref}>
                
                <img id="photoAmi" src="papillon.jpg"/>
                <button className = "button" id = "pseudoAmi">@{pseudo}</button>
        
            </div>
        )
    }
)

export default Ami;
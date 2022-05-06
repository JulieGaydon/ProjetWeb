import React, { forwardRef } from 'react';
import './message.css';

const Message = forwardRef(
    ({pseudo, message},ref)=>{
        return(
            <div className="post" id='Message' ref={ref}>
                
                <img id="photo"src="papillon.jpg"/>
                {pseudo}
                
                {/* <text id = "pseudo" type = "text"></text> */}
                {/* <input id = "date" type = "date" placeholder="Date" name = "date" value= {this.state.date} onChange= {this.handleChange}></input> */}
                    
            <div id="contenu">
                {message}
                {/* <text id = "Mess" type = "text" placeholder="Message" name = "message" value= {this.state.message} onChange= {this.handleChange}></text> */}
            </div>
            </div>
        )
    }
)
// class Message extends Component{
//     constructor(props){
//         super(props);
//         this.state = {pseudo :"", mess : ""}
//         this.setState({pseudo : this.props.pseudo})
//         this.setState({mess : this.props.messo})
//         // mess= this.props.mess
//         // this.state = {m : props.m}
//         // console.log("liste props message :", this.props.mess)
//     }

//     // liste(){
//     //     listeMessageLM
//     // }

//     // handleMessageClick(){
//     //     this.setState = {m : this.state.m}
//     // }

//     render(){
//         return (<div className='post'>
//                     <div className='header'>
//                         <div className='text'>
//                             <h3>
//                                 {this.state.pseudo}
//                             </h3>
//                         </div>
//                         <div className='post text'>
//                             <p>{this.state.text}</p>
//                         </div>
//                     </div>
//                 </div>
//                 )
//     }

//     // render(){
//     //     
//     // }
// }

export default Message;
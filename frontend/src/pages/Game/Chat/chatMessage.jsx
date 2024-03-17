import React from "react";
import "./Chat.css"
export default function ChatMessage({...props}){

    
    const name = "";//Здесь должен быть sender
    let isMe = 'other'
    if(props.userName == name){
        isMe  = 'self'; 
    }

    return(
        <>
        {
            isMe === "self" ? 
            <li className="self">
                <div className="msg">
                    <p>{props.message}</p>
                    <div className ="msg-name">{props.userName}</div>
                </div>
                <div className="avatar">
                    <img src={"https://i.imgur.com/MllSy5N.png"} draggable="false"/>
                </div>
            </li> 
            :
            <li className="other">
                <div className="avatar">
                    <img src={"https://i.imgur.com/MllSy5N.png"} draggable="false"/>
                </div>
                <div className="msg">
                    <p>{props.message}</p>
                    <div className ="msg-name">{props.userName}</div>
                </div>
        </li>
        }
        </>
    )
}
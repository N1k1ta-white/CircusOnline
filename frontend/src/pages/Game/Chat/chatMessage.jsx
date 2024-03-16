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
            <li class={isMe ='other'}>
                <div class ="msg-name">{props.userName}</div>
                <div class="avatar"><img src={props.src = "https://i.imgur.com/MllSy5N.png"} draggable="false"/></div>
                    <div class="msg">
                        <p>{props.message}</p>
                </div>
            </li>
        </>
    )
}
import React from "react";

export default function ChatMessage({...props}){

    const name = "";
    let isMe = 'other'
    if(props.userName == name){
        isMe  = 'self'; 
    }

    return(
        <>
            <li class={isMe}>
                <div class="avatar"><img src={props.src} draggable="false"/></div>
                    <div class="msg">
                        <p>{props.message}</p>
                </div>
            </li>
        </>
    )
}
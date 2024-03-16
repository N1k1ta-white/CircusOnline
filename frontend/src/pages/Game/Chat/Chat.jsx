
import { useState } from 'react';
import {io} from "socket.io-client"
import ChatMessage from './chatMessage';
import "./Chat.css"

export default function Chat({}){

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const domain = "";
    const userName = "Kolia";//Имя клиента
    const socket = io();

    socket.on("connectoin",  "hi")
     
    function handleInput(e){
        setMessage(e.target.value);
    }

    function handleEnter(e){
        if(e.key === 'Enter' && message.trim().length > 0){
            socket.emit("send message",{
                sender:userName,
                message: message
            })
            messages.push({message,userName});
            setMessages(messages);
            setMessage("")
        }
        
    }




    return(
        <>
            <div class="menu">
                <div class="back"> <img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
                <div class="name">{userName}</div>
                
                </div>
                <ol class="chat"  >
                    {messages.map(msg => <ChatMessage {... msg}/>)}
                </ol>

            <input onChange={handleInput} class ="textarea" type="text" 
                onKeyDown={handleEnter} placeholder="Type here!" value={message}/>            
        </>
    )
} 


import { useState } from 'react';
import {io} from 'socket.io-client'
import ChatMessage from './chatMessage';

export default function Chat({}){

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const domain = "";
    const userName = "";
    const socket = io(domain);
     
    function handleInput(e){
        setMessage(e.target.value);
    }

    function handleEnter(e){
        if(e.key === 'Enter')
            setMessage(
                socket.emit("send message",{
                    sender:userName,
                    message: message
                })
            );
        messages.push({message,userName});
        setMessages(messages);
    }




    return(
        <>
            <div class="menu">
                <div class="back"><i class="fa fa-chevron-left"></i> <img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
                <div class="name">Alex</div>
                </div>
                <ol class="chat">
                    {messages.map(message => <ChatMessage {... message}/>)}
                    <li class="other">
                        <div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div>
                        <div class="msg">
                            <p>Hola!</p>
                            <p>Te vienes a cenar al centro? <emoji class="pizza"/></p>

                        </div>
                    </li>

                <li class="self">
                    <div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div>
                    <div class="msg">
                        <p>hEHEHE:</p>
                    </div>
                </li>
            </ol>

            <input onChange={handleInput}class="textarea" type="text" onKeyDown={handleEnter} placeholder="Type here!" value={value}/>            
        </>
    )
} 

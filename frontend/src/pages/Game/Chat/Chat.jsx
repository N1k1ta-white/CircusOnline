
import { useState } from 'react';
import ChatMessage from './chatMessage';
import "./Chat.css"

export default function Chat({}){

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    const userName = localStorage.getItem("currPlayer");//Имя клиента
     
    function handleInput(e){
        setMessage(e.target.value);
    }

    function handleEnter(e){
        if(e.key === 'Enter' && message.trim().length > 0){
            messages.push({message,userName});
            setMessages(messages);
            setMessage("")
        }
    }
    
    return(
        <>
            <div className="menu">
                <div className="back">
                    <img className='avatar' src="https://i.imgur.com/DY6gND0.png" draggable="false"/>
                </div>
                <div className="name">{userName}</div>
            </div>
            <ol className="chat"  >
                    {messages.map((msg, index) => <ChatMessage {... msg}/>)}
            </ol>
            <input 
                style={{
                    borderRadius: "0px 0px 20px 20px",
                    height: "8%",
                    border: 'none'
                }}
                onChange={handleInput} 
                className ="textarea" type="text" 
                onKeyDown={handleEnter} 
                placeholder="Type here!" 
                value={message}
            />            
        </>
    )
} 

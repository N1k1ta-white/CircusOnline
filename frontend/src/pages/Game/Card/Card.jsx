import style from "./Card.module.css"
import ioSocket from '../../../utils/api/SocketIO/ChatClient'
import { io } from "socket.io-client"
export default function Card({callback, ...props}){



    function pick(){
        callback(props.index)
        props.pick();
    }
    
    return(
        <>
           <div className = {style.cardFrame} >
                <img className = {style.image} key = {props.index} src = {props.image} alt="MEME" onClick = {pick}/>
            </div>     
        </>
    )

}
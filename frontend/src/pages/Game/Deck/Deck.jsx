import { useState } from "react"
import ioSocket from '../../../utils/api/SocketIO/ChatClient'
import Card from "../Card/Card"
import styles from './Deck.module.css'

export default function Deck(){

    const [cards,setCards] = useState([
        {image:"https://i.imgur.com/8nLFCVP.png",index : 0},
        {image:"https://i.imgur.com/8nLFCVP.png",index : 1},
        {image:"https://i.imgur.com/8nLFCVP.png",index : 2},
        {image:"https://i.imgur.com/8nLFCVP.png",index : 3}
    ])


    function removeCard(idCard){
        setCards(cards.filter((card)=>{card.index != idCard}));
    }


    return(
        <>
           <section className = {styles["deck"]}>
                {cards.map((crd, index) => <Card key = {index} {... crd} callback ={removeCard}/>)}
            </section> 
        </>
    )
}
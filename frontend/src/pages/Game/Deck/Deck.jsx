import { useState } from "react"
import Card from "../Card/Card"
import styles from './Deck.module.css'

export default function Deck(){

    const [cards,setCards] = useState([
        {image:"https://i.imgur.com/8nLFCVP.png"},
        {image:"https://i.imgur.com/8nLFCVP.png"},
        {image:"https://i.imgur.com/8nLFCVP.png"},
        {image:"https://i.imgur.com/8nLFCVP.png"}
    ])//For Test

    return(
        <>
           <section className = {styles["deck"]}>
                {cards.map((crd, index) => <Card key = {index} {... crd} />)}
            </section> 
        </>
    )
}
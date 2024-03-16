import { useState } from "react"
import Card from "../Card/Card"

export default function Deck(){

    const [cards,setCards] = useState([{image:"https://i.imgur.com/8nLFCVP.png"}])

    return(
        <>
           <section class = "deck">
                {cards.map(crd => <Card {... crd} />)}
            </section> 
        </>
    )
}
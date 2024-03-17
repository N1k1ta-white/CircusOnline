import { useParams } from "react-router-dom";
import styles from "./Session.module.css"
import { useEffect, useState } from "react";
import Chat from "../Game/Chat/Chat";
import TopLabel from '../Game/TopLabel/TopLabel'
import Deck from "../Game/Deck/Deck"
import ExitButton from "../Game/ExitButton/ExitButton";
export default function Session ({children, ...props}) {

    const [tableCards,setTableCards] = useState([]);
    const [deckCardds,setDeckCards] = useState([]);
    
    

    const  {name} = useParams();
    useEffect(() => {
        console.log(name)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.gameWindow}>
                <div className={styles.chat}>
                    <Chat />
                </div>
                <div className={styles.game}>
                    <div className={`${styles.gameWindowItem}`}>
                         {/* {<TopLabel/> }  */}
                    </div>
                    <div className={styles.ExitButton}>
                        <ExitButton/>
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.empty}`}>
                        {tableCards
                            .map((item,index) => {return(<>
                                <img src={item.src} alt="" />
                            </>
                            )})}
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.Deck}`}>
                        <Deck />
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                </div>
            </div>
        </div>
    )
}

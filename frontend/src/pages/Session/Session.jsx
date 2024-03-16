import { useParams } from "react-router-dom";
import styles from "./Session.module.css"
import { useEffect } from "react";
import Chat from "./Chat/Chat"
import styles from "./Game.module.css"
import TopLabel from "./TopLabel/TopLabel"
import Deck from "./Deck/Deck"

export default function Session ({children, name, ...props}) {
    const name = useParams();
    useEffect(() => {
        console.log(name)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.gameWindow}>
                <div className={styles.chat}
                ><Chat /></div>
                <div className={styles.game}>
                    <div className={`${styles.gameWindowItem}`}>
                        {/* {<TopLabel/> } */}
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.empty}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.Deck}`}>
                        <Deck/>
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                </div>
            </div>
        </div>
    )
}

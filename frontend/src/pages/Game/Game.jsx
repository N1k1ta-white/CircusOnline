import Chat from "./Chat/Chat"
import styles from "./Game.module.css"
import TopLabel from "./TopLabel/TopLabel"
export default function Game ({children, ...props}) {
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
                    <div className={`${styles.gameWindowItem} ${styles.table}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                </div>
            </div>
        </div>
    )
}
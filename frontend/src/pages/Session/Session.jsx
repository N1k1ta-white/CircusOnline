import { useParams } from "react-router-dom";
import styles from "./Session.module.css"
import { useEffect } from "react";
export default function Session (props) {
    const { name } = useParams();
    useEffect(() => {
        console.log(name)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.gameWindow}>
                <div className={styles.chat}
                ></div>
                <div className={styles.game}>
                    <div className={`${styles.gameWindowItem} ${styles.chat}`}></div>
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
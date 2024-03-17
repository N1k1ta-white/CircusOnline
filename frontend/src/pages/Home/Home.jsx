import React, { useState } from 'react'
import { LoginButton } from '../../components/AuthButtons'
import styles from'./Home.module.scss'
import Input from '../../components/Input/Input';

export default function Home() {
    const [login, setLogin] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("currPlayer", login);
        setLogin("")
    }



    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <p>Welcome</p>
                <Input type={"text"} placeholder={"Login"} value={login} setValue={setLogin} /><br />
                <LoginButton name={login}/>
            </form>

            <div className={styles.drop}>
                <div className={`${styles.drop} ${styles['drop-1']}`}></div>
                <div className={`${styles.drop} ${styles['drop-2']}`}></div>
                <div className={`${styles.drop} ${styles['drop-3']}`}></div>
                <div className={`${styles.drop} ${styles['drop-4']}`}></div>
                <div className={`${styles.drop} ${styles['drop-5']}`}></div>
            </div>
        </div>
    )
}

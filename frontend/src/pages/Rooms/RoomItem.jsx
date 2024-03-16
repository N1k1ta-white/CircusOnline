import React from 'react'
import styles from "./Room.module.css"

export default function RoomItem(props) {

  return (
    <div className={styles['roomItem']}>
        <h2 style={{
            alignSelf: "center",
            fontWeight: 700,
            margin: 0
        }}>{props.name}</h2>
        <span><b><u>Owner:</u></b> {props.owner}</span>
        <div className={styles["players"]}>
            <span><b><u>Players:</u></b> {props.owner}</span>
        </div>

        {
            props.players.map((item, index) => {
                <div key={index} className={styles["player"]}>{item.name[0].toUpperCase()}</div>
            })
        }
    </div>
  )
}

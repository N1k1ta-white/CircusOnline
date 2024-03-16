import React from 'react'
import styles from "./Room.module.css"

export default function RoomItem(props) {

  return (
    <div className={styles['roomItem']}>
        <span>{props.name}</span>
        <span>{props.owner}</span>
        {
            props.players.map((item, index) => {
                <div className="player">player {index}</div>
            })
        }
    </div>
  )
}

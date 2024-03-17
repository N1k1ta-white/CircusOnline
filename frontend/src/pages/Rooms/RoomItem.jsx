import React from 'react'
import styles from "./Room.module.css"
import { useNavigate } from 'react-router-dom'
import image from '../../assets/clown.png'
import api from '../../utils/api/apiSettings'
import ioSocket from '../../utils/api/SocketIO/ChatClient'
import { sessionRoute } from '../../utils/api/apiRoutes'

export default function RoomItem(props) {
    const navigate = useNavigate()
    const handleJoinGroup = () => {
        const cookieValue = localStorage.getItem("token");
        ioSocket.joinRoom(props.name);
        async function fetchData(cookieValue) {
            api.post(sessionRoute + `/${props.name}`, {
                username: localStorage.getItem("login")
            }, {
                headers: {
                    auth: cookieValue
                }
            })
                .then(response => {
                    console.log(response.data);
                    navigate(`/rooms/${props.name}`)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData(cookieValue)
    }
  return (
    <div className={styles['roomItem']}>
        <img src={image} alt="" />
        <h2 style={{
            alignSelf: "center",
            fontWeight: 700,
            margin: 0
        }}>{props.name}</h2>
        <span><b><u>Owner:</u></b> {props.owner}</span>
        <div className={styles["players"]}>
            <span><b><u>Players:</u></b></span>
            {
                props.players.map((item, index) => {
                    <div style = {{
                        background: item.color
                    }} key={index} className={styles["player"]}>{item.name?.charAt(0).toUpperCase()}</div>
                })
            }
        </div>
        <button onClick={handleJoinGroup}>Join group</button>
    </div>
  )
}

import React from 'react'
import styles from "./Room.module.css"
import { useNavigate } from 'react-router-dom'
import image from '../../assets/clown.png'
import api from '../../utils/api/apiSettings'
import { sessionRoute } from '../../utils/api/apiRoutes'

export default function RoomItem(props) {
    console.log(props.players)
    const navigate = useNavigate()
    const handleJoinGroup = () => {
        const cookieValue = localStorage.getItem("token");
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
                    return (
                        <div style = {{
                            background: item._color
                        }} key={index} className={styles["player"]}>{item._username?.charAt(0).toUpperCase()}</div>
                    )
                })
            }
        </div>
        <button onClick={handleJoinGroup}>Join group</button>
    </div>
  )
}

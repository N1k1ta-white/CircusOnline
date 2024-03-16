import React, { useEffect, useState } from 'react'
import { sessionRoute } from '../../utils/api/apiRoutes'
import RoomItem from './RoomItem'
import api from '../../utils/api/apiSettings'
import styles from './Rooms.module.css'
import Input from '../../components/Input/Input'
import io  from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import { host } from '../../utils/api/apiRoutes'



export default function Rooms() {
    const [loading, setLoading] = useState(true)
    const [sessions, setSessions] = useState([])
    const [name, setName] = useState("")
    const navigate = useNavigate()
    
    // const socket = io(host + "/chat");
    
    // socket.on("connect", () => {
    //     console.log(socket.connected); // true
    //   });
    //   socket.io.on("reconnect_attempt", () => {
    //     console.log("SNOVA")
    //   });
    // socket.on("disconnect", (reason, details) => {
    //     console.log(reason + "PISDA")
    //   });
      
    useEffect(() => {
        const cookieValue = localStorage.getItem("token");
        let id
        async function fetchData(cookieValue) {
            console.log(cookieValue)
            id = setInterval(() => {
                api.get(sessionRoute, {
                    headers: {
                        auth: cookieValue
                    }
                })
                .then(response => {
                    console.log(response.data.data)
                    setSessions(response.data.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                })
            }, 5000)
        }
        fetchData(cookieValue);

        return () => {
            clearInterval(id)
        }
    }, [])

    const handleCreateSession = () => {
        setName("")
        const cookieValue = localStorage.getItem("token");
        async function fetchData(cookieValue) {
            api.post(sessionRoute, {
                name: name,
            }, {
                headers: {
                    auth: cookieValue
                }
            })
                .then(response => {
                    console.log(response.data);
                    navigate(`/rooms/${response.data.data.name}`)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData(cookieValue)
    }
    return (
        <>
            {
                loading ? 
                <div className={styles['loader']}>Loading...</div>
                :
                <div className={styles["sessionScreen"]}>

                    <div className={styles['sessions']}>
                        {
                            sessions.map((item, index) => {
                                return (
                                    <RoomItem key={index} name={item.name} owner={item.owner} players={Object.values(item.players)}/>
                                )
                            })
                        }
                    </div>
                    <div className={styles["newSession"]}>
                        <div className={styles["newSessionInner"]}>
                            <Input type={"text"} placeholder={"Type a name"} value={name} setValue={setName} />
                            <button onClick={handleCreateSession}>Create session</button>
                            
                        </div>
                    </div>
                </div>

            }
        </>
    )
}

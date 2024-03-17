import { useParams } from "react-router-dom";
import styles from "./Session.module.css"
import { useEffect, useState } from "react";
import Chat from "../Game/Chat/Chat";
import TopLabel from '../Game/TopLabel/TopLabel'
import Deck from "../Game/Deck/Deck"
import IOSocket from '../../utils/api/SocketIO/ChatClient'
import ExitButton from "../Game/ExitButton/ExitButton";
import { host } from "../../utils/api/apiRoutes";
export default function Session ({children, ...props}) {

    const [tableCards,setTableCards] = useState([]);
    const [deckCards,setDeckCards] = useState([]);
    const [owner,setOwner] = useState('');
    const [topic,setTopic] = useState('')
    const [images,setImages] = useState([]);
    const [voteCards,setVoteCards] = useState([])
    const [status,setStatus] = useState("NULL");
    const [isActive,setIsActive]= useState(true)

    function getRandomInt(min, max) {
        min = Math.ceil(min); 
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    IOSocket.on("turn",(data) =>{
        setStatus("TURN");
        setIsActive(true);
        setTopic(data.topic);
        let x = getRandomInt(1,300);
        let img1 = {crd:`${host}/${x}.jpg`, index:x,username:""};
        x = getRandomInt(1,300);
        let img2 = {crd:`${host}/${x}.jpg`, index:x,username:""};
        x = getRandomInt(1,300);
        let img3 = {crd:`${host}/${x}.jpg`, index:x,username:""};
        x = getRandomInt(1,300);
        let img4 = {crd:`${host}/${x}.jpg`, index:x,username:""};
        let arr = [img1,img2,img3,img4];
        setImages(arr);
    })
    IOSocket.on("vote",() => {
        setStatus("VOTE")
        setIsActive(true);
        const cookieValue = localStorage.getItem("token");
        async function fetchData(cookieValue) {
            api.get(sessionRoute + `/${name}`, {
                username: localStorage.getItem("login")
            }, {
                headers: {
                    auth: cookieValue
                }
            })
                .then(response => {
                    console.log(response.data);
                    setOwner(response.data.data.owner)
                    let users = Object.values(response.data.data.players);
                    let voteArray = users.map((data) => ({
                        username, 
                        card: host.concat("/"+ data.card +".jpg"),
                        ...data
                    }))
                    setVoteCards(voteArray)
                    
                    users[0].username;
                    users[0].card;

                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData(cookieValue)
    })
    

    function startButtonHandle(){
        IOSocket.get().emit("start");
    }
    
    function handleClickVote(target){
        if(isActive){
            IOSocket.emit("vote",{target})
            setIsActive(false);
        }
    }

    function handleClickTurn(id){
        if(isActive){
                IOSocket.emit("play",{username: localStorage.getItem('login'), cardid:id})
                setIsActive(false);
            }
    }

    const  {name} = useParams();
    useEffect(() => {
        const cookieValue = localStorage.getItem("token");
        async function fetchData(cookieValue) {
            api.get(sessionRoute + `/${name}`, {
                username: localStorage.getItem("login")
            }, {
                headers: {
                    auth: cookieValue
                }
            })
                .then(response => {
                    console.log(response.data);
                    setOwner(response.data.data.owner)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchData(cookieValue)
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
                        <div className={styles.topic}>
                            {topic}
                        </div>
                        {
                            status === "VOTE" ?  
                                <section className = {styles["deck"]}>
                            {voteCards.map((crd) => <img onClick={()=>handleClickVote(crd.username)} className = "image" src = {crd.card} alt="MEME" /> )}
                            </section>  : <></>
                        }
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}></div>
                    <div className={`${styles.gameWindowItem} ${styles.Deck}`}>
                        <>{
                            status === "TURN"?
                        
                            <section className = {styles["deck"]}>
                                {images.map((crd,index) => <img value = {crd.index} onClick={(e)=>handleClickTurn(e.target.value)} className = "image" src = {crd.crd} alt="MEME" /> )}
                            </section> 
                            :
                            <></> 
                            }
                        </>
                    </div>
                    <div className={`${styles.gameWindowItem} ${styles.player}`}>
                        <button className={styles.startButton} 
                            onClick={startButtonHandle} 
                            disabled = {localStorage.getItem("login") === owner}>START</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

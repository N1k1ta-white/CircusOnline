import style from "./Card.module.css"
export default function Card(props){
    const handleClick = () => {
        
    }

    return(
        <img onClick={handleClick} className = {style.image} src = {props.card} alt="MEME" />  
    )

}
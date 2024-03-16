import style from "./Card.module.css"
export default function Card({...props}){

    
    return(
        <>
           <div className = {style.cardFrame} >
                <img class = {style.image} src = {props.image} alt="MEME" />
            </div>     
            
        </>
    )

}
import './Input.css'
import { useRef } from "react";
export default function Input({... props}){

    return(
        <input type="text" class="form__input" id="name" placeholder="#23453 " required="" {...props}/>
    )
}
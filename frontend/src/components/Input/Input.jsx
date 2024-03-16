import './Input.css'
import {useRef} from "react";
export default function Input(){

    const refIn = useRef();


    return(
        <input type="text" class="form__input" id="name" placeholder="#23453 " required=""/>
    )
}
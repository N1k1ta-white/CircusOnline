import React from 'react'
import './Input.module.scss'

export default function Input(props) {
    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)}/>
    )
}

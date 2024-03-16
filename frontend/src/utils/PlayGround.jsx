import sha256 from 'js-sha256'
import React from 'react'
export default function PlayGround(){

    const test = sha256("Hi");
    console.log(test);
    return (
        <>
            <h1>{test}</h1>
        </>
    )
}
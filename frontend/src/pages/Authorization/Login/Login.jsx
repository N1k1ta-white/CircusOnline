import React from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

  const navigate = useNavigate();


  function handleRegister(){
    navigate('/register')
  }

  return (
    <>
      <div className={style.form}>
        <div className={style.title}>Welcome</div>
          <div className={style.subtitle}></div>
          <div className= {`${style['input-container']} ${style.ic1}`} >
            <input id="firstname" className={style.input} 
                type="text" placeholder=" "
                value={props.login}
                onChange={(e) => (props.setLogin(e.target.value))}/>
            <div class={style.cut}></div>
            <label for="firstname" className={style.placeholder}>First name</label>
          </div>
          
          <div className={`${style['input-container']} ${style.ic2}`}>
            <input id="email" className={style.input} 
            type="text" placeholder=" " 
            value={props.password} onChange={(e) =>(props.setPassword(e.target.value))}/>
            <div className={`${style['cut-short']} ${style.cut}`}></div>
            <label for="email" className={style.placeholder}>Password</label>
        </div>
        <button type="text" className={style.submit}  >Login</button>
        <button className={style.link } onClick={handleRegister}>Register?</button>
    </div>
    </>
  )
}

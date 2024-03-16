import React from 'react'
import style from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {
    const { loading, success } = useSelector((state) => state.register)
    const { userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate()

  const nav = useNavigate();

  function handleLogin(){ 
    nav('/login')
  }

  return (
    <>
        <form className={style.form}>
            <div className={style.title}>Fill it!</div>
            <div className={style.subtitle}></div>
            <div className= {`${style['input-container']} ${style.ic1}`} >
                <input id="firstname" className={style.input} type="text" placeholder=" " />
                <div class={style.cut}></div>
                <label for="firstname" className={style.placeholder}>First name</label>
            </div>
            <div className={`${style['input-container']} ${style.ic2}`}>
                <input id="password" className={style.input} type="text" placeholder=" " />
                <div className={`${style.cut}`}></div>
                <label for="password" className={style.placeholder}>Password</label>
            </div>

            <div className={`${style['input-container']} ${style.ic2}`}>
                <input id="email" className={style.input} type="text" placeholder=" " />
                <div className={`${style['cut-short']} ${style.cut}`}></div>
                <label for="email" className={style.placeholder}>Email</label>
            </div>
            <button type="text" className={style.submit}>Login</button>
            <button className={style.link } onClick={handleLogin}>login?</button>
        </form>
    </>
  )
}

import React, { useEffect, useState } from 'react'
import style from './Register.module.css'
import { useNavigate } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../../utils/redux/authActions';


export default function Register() {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, success } = useSelector((state) => state.register)
    const { userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        // redirect user to login page if registration was successful
        if (success) navigate('/login')
        // redirect authenticated user to profile screen
        if (Object.keys(userInfo).length !==0) navigate(`/`)
    }, [navigate, userInfo, success])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(handleValidation()) {
            const response = await dispatch(fetchRegister({login, email, password}))
            console.log(response)
            if(response.type === 'auth/fetchRegister/rejected') {
              throw(response.payload)
            }
            alert('Please, confirm your email')
          }
        } catch (error) {
          handleValidation(error)
        }
    };

    const handleValidation = (error) => {
        if (login.length < 3) {
          toast.error(
            "Username should be greater than 3 characters.",
            toastOptions
          );
          return false;
        } else if (password.length < 8) {
          toast.error(
            "Password should be equal or greater than 8 characters.",
            toastOptions
          );
          return false;
        } else if (email === "") {
          toast.error("Email is required.", toastOptions);
          return false;
        } else if (error) {
          toast.error(error, toastOptions);
          return false;
        }
        return true;
    }


    function handleLogin(){ 
        navigate('/login')
    }

    return (
        <>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.title}>Fill it!</div>
                <div className={style.subtitle}></div>
                <div className= {`${style['input-container']} ${style.ic1}`} >
                    <input 
                        id="firstname" 
                        className={style.input} 
                        type="text" 
                        placeholder=" " 
                        value={login} 
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <div class={style.cut}></div>
                    <label for="firstname" className={style.placeholder}>Login</label>
                </div>
                <div className={`${style['input-container']} ${style.ic2}`}>
                    <input 
                        id="password" 
                        className={style.input} 
                        type="text" 
                        placeholder=" " 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={`${style.cut}`}></div>
                    <label for="password" className={style.placeholder}>Password</label>
                </div>

                <div className={`${style['input-container']} ${style.ic2}`}>
                    <input 
                        id="email" 
                        className={style.input} 
                        type="text" 
                        placeholder=" " 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={`${style['cut-short']} ${style.cut}`}></div>
                    <label for="email" className={style.placeholder}>Email</label>
                </div>
                <button type="text" className={style.submit}>Login</button>
                <button className={style.link } onClick={handleLogin}>login?</button>
            </form>
            <ToastContainer />
        </>
    )
}

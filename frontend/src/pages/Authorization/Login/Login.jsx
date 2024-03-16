import React, { useEffect, useState } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { fetchLogin } from '../../../utils/redux/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { loading, userInfo } = useSelector((state) => state.auth)
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    useEffect( () => {
        if(Object.keys(userInfo).length !== 0) {
          navigate(`/home`)
        }
    }, [navigate, userInfo] )


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if(handleValidation()) {
            const response = await dispatch(fetchLogin({login, password}))
            // console.log(response)
            if(response.type === 'auth/fetchLogin/rejected') {
                throw(response.payload)
            }
            }
        } catch (error) {
            handleValidation(error)
        }
    }

    const handleValidation = (serverError) => {
        if (login === "") {
            toast.error("Login is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Password is required.", toastOptions);
            return false;
        } else if (serverError) {
            toast.error(serverError, toastOptions);
            return false;
        }
        return true;
    }

    function handleRegister(){
        navigate('/register')
    }


  return (
    <>
<<<<<<< HEAD
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
        <button type="text" className={style.submit} >Login</button>
        <button className={style.link } onClick={handleRegister}>Register?</button>
    </div>
=======
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.title}>Welcome</div>
            <div className={style.subtitle}></div>
            <div className= {`${style['input-container']} ${style.ic1}`} >
                <input id="firstname" className={style.input} 
                    type="text" placeholder=" "
                    value={login}
                    onChange={(e) => (setLogin(e.target.value))}/>
                <div className={style.cut}></div>
                <label htmlFor="firstname" className={style.placeholder}>First name</label>
            </div>
            <div className={`${style['input-container']} ${style.ic2}`}>
                <input id="email" className={style.input} 
                type="text" placeholder=" " 
                value={password} onChange={(e) =>(setPassword(e.target.value))}/>
                <div className={`${style['cut-short']} ${style.cut}`}></div>
                <label htmlFor="email" className={style.placeholder}>Password</label>
            </div>
            <button type = "submit" className={style.submit}>{loading ? 'Logging in...' : 'Log in'}</button>
            <button className={style.link} onClick={handleRegister}>Register?</button>
        </form>
        <ToastContainer/>
>>>>>>> 1e19c8abf839d1d958833f6fb8bc7695999ef794
    </>
  )
}

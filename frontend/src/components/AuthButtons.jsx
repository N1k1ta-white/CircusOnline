import React from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import { loginRoute, logoutRoute } from '../utils/api/apiRoutes';
import api from '../utils/api/apiSettings';

export const LoginButton = ({name}) => {
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            let response = api.post(loginRoute, {username: name})
            .then(response => {
                console.log(response.data)
                if(response.status >= 200 && response.status < 300){
                    console.log(response.data.data)
                    localStorage.setItem("login", response.data.data.user.username)
                    localStorage.setItem("token", response.data.data.token)
                    login(); 
                } else {
                    alert("Try another")
                }
            })
            .catch(error => {
                console.log(error)
            })
        } catch (error) {
            alert(error)
        }
    };

    return (
        <button onClick={handleLogin}>Login</button>
    );
};

export const LogoutButton = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            const response = await axios.get(logoutRoute, localStorage.getItem("login"));
            if(response.status === 200){
                localStorage.clear()
                logout(); 
            } else {
                alert("Something went wrong")
            }
        } catch (error) {
            alert(error)
        }
    };

    return (
        <button onClick={handleLogout}>Exit</button>
    );
};

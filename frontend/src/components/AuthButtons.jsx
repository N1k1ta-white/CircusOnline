import React from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import { loginRoute, logoutRoute } from '../utils/api/apiRoutes';

export const LoginButton = ({name}) => {
    const { login } = useAuth();

    const handleLogin = async () => {
        const response = await axios.get(loginRoute, name);
        if(response.status === 200){
            localStorage.setItem("login", response.data.data)
            login(); 
        } else {
            alert("Try another")
        }
    };

    return (
        <button onClick={handleLogin}>Login</button>
    );
};

export const LogoutButton = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        // Здесь может быть логика для выполнения выхода из системы, например, отправка запроса на сервер
        const response = await axios.get(logoutRoute, localStorage.getItem("login"));
        if(response.status === 200){
            localStorage.clear("login")
            logout(); 
        } else {
            alert("Something went wrong")
        }
    };

    return (
        <button onClick={handleLogout}>Exit</button>
    );
};

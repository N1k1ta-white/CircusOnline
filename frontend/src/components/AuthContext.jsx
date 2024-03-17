import React, { useState, useContext, useEffect } from 'react';
import IOSocket from '../utils/api/SocketIO/ChatClient'
import api from '../utils/api/apiSettings';
import { authCheck } from '../utils/api/apiRoutes';
import Cookies from 'js-cookie';

// Создаем контекст аутентификации
const AuthContext = React.createContext();

// Создаем компонент-провайдер, который предоставляет информацию об аутентификации
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const cookieValue = localStorage.getItem("token");
        async function fetchData(cookieValue) {
            console.log(cookieValue)
            api.get(authCheck, {
                headers: {
                    auth: cookieValue // Set the Cookie header with the specified cookie string
                }
            })
                .then(res => {
                    setIsAuthenticated(res.status >=200 && res.status < 300)
                    IOSocket.init(cookieValue);
                    console.log(IOSocket.get().id);
                })
                .catch(error => {
                    console.log(error)
                });
        }
        fetchData(cookieValue);
    }, [])

    // Метод для выполнения входа в систему
    const login = () => {
        setIsAuthenticated(true);
    };

    // Метод для выполнения выхода из системы
    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста аутентификации в компонентах
export const useAuth = () => {
    return useContext(AuthContext);
};

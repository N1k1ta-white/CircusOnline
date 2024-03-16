import React, { useState, useContext } from 'react';

// Создаем контекст аутентификации
const AuthContext = React.createContext();

// Создаем компонент-провайдер, который предоставляет информацию об аутентификации
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    console.log(useContext(AuthContext))
    return useContext(AuthContext);
};

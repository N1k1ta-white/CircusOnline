import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './components/AuthContext'; // Подключаем контекст аутентификации
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';
import Room from './pages/Room/Room';
import Game from './pages/Game/Game'

function App() {
    const { isAuthenticated } = useAuth();
    useEffect(() => {
        const login = localStorage.getItem("login")
        console.log("User authorized:" + login ? login : "Unauthorized");
    }, [isAuthenticated]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Rooms /> : <Home/>} />
                    <Route path="/rooms" element={isAuthenticated ? <Rooms /> : <Navigate to="/" />} />
                    <Route path="/room/game" element={<Game/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
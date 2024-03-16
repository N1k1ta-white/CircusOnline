import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Rooms from './pages/Rooms/Rooms';
import Home from './pages/Home/Home';
import Session from './pages/Session/Session';
import { useAuth } from './components/AuthContext';
import { useEffect, useState } from 'react';

function App() {
    const {isAuthenticated} = useAuth()
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={isAuthenticated ? <Navigate to="/rooms" />: <Home/>} />
                    <Route path="/rooms" element={isAuthenticated ? <Rooms isAuthenticated = {isAuthenticated}/> : <Navigate to="/" />} />
                    <Route path="/rooms/:name" element={<Session />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
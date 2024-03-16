import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./pages/Game/Game";
import Home from './pages/Home/Home';
import Login from './pages/Authorization/Login/Login';
import Register from './pages/Authorization/Register/Register'
import Header from "./components/Header/Header";
import PlayGround from './utils/PlayGround';
import IndexPage from './components/IndexPage/IndexPage';

function App() {
  return (
      <>
          <Header/>
            {/* <IndexPage/> */}
            <BrowserRouter>
              <Routes>
                    <Route path='/playground' element={<PlayGround/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game' element={<Game/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
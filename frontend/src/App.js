import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./pages/Game/Game";
import Home from './pages/Home/Home';
import Authorization from './pages/Authorization/Authorization';
import Header from "./components/Header/Header";
import IndexPage from './components/IndexPage/IndexPage';

function App() {
  return (
      <>
          <Header/>
            <IndexPage/>
            <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game' element={<Game/>}/>
                    <Route path='/auth' element={<Authorization/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
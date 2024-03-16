import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./pages/Game/Game";
import Home from './pages/Home/Home';
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from './utils/redux/authActions';

function App() {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.auth)
    useEffect(() => {
        const updateToken = async () => {
        const data = await dispatch(fetchProfile())
        console.log(data)
        if (Object.keys(userInfo).length !== 0 && 'accessToken' in userInfo) {
          window.localStorage.setItem('accessToken', data.payload.accessToken)
        } 
    }
    updateToken()
    // eslint-disable-next-line
  }, [dispatch])
  return (
      <>
          <Header/>
          <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game' element={<Game/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
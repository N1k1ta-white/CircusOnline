import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./pages/Game/Game";
import Header from "./components/Header/Header";

function App() {
  return (
      <>
          <Header/>
          <BrowserRouter>
              <Routes>
                  <Route path='/game' element={<Game/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;

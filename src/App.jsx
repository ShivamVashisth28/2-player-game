import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import ChooseGame from './pages/ChooseGame'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/game' element={<Game/>} />
              <Route path='/game/:id' element={<ChooseGame/>} />
          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
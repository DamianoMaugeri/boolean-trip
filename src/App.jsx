import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ShowPage from './pages/ShowPage/ShowPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<MainPage />} />
            <Route path='/travel/:id' element={<ShowPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

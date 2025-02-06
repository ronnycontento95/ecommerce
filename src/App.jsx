import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/page_home'
import Header from './components/header/header'

function App() {

  return(
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} exact = {true} element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

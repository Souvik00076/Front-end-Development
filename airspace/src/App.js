import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
        <Nav/>
        <Home/>
    </div>
  )
}

export default App

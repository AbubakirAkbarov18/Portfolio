import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Process from '../Process/Process'

const RouterController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/process' element={<Process/>}/>
    </Routes>
  )
}

export default RouterController
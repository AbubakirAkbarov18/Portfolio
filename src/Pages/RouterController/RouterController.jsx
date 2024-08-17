import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'

const RouterController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>
  )
}

export default RouterController
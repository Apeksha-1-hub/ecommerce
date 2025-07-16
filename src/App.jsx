import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './home/Home'


const App = () => {
  return (
    <div>
       <BrowserRouter>
      
             <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />

              <Route path="/home" element={<Home/>}/>

              

              </Route>
             </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App

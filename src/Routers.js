import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Child from './Child';
import Parent from "./Parent"

const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Parent/>}/>
      <Route path='/Child' element={<Child/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers;
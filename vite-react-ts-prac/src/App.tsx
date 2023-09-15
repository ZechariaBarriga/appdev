import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MyName from './layouts/MyName';
import SayMyName from './layouts/SayMyName';
import SideBarComponent from './components/SideBarComponent';
import RightBarComponent from './components/RightBarComponent';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideBarComponent />} >
        <Route element={<RightBarComponent />}>
        <Route path='' element={<MyName/>}></Route>
        <Route path='SayMyName' element={<SayMyName/>}></Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

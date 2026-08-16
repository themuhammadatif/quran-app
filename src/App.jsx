import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home/Home'
import Audio from './Pages/Audio/Audio'
import Surah from './Pages/Surah/Surah'
import Navbar from './Components/Navbar/Navbar'
import Surahdetail from './Pages/Surahdetail/Surahdetail.jsx'
import Audioplayer from './Components/Audioplayer/Audioplayer.jsx'



const App = () => {
  return (
    <>
    <Navbar/>



    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/audio" element={<Audio/>} />
      <Route path="/surah" element={<Surah/>} />
      <Route path="/surahdetail/:id" element={<Surahdetail/>} />
    </Routes>
    </>
   
  )
}

export default App
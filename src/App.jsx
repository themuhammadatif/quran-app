import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Audio from './Pages/Audio/Audio'
import Surah from './Pages/Surah/Surah'
import Sidebar from './Components/Sidebar/Sidebar'
import Surahdetail from './Pages/Surahdetail/Surahdetail.jsx'
import Audioplayer from './Components/Audioplayer/Audioplayer.jsx'
import Juz from './Pages/Juz/Juz'



const App = () => {
  return (
    <>
    <Sidebar/>



    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/audio" element={<Audio/>} />
      <Route path="/surah" element={<Surah/>} />
      <Route path="/surahdetail/:id" element={<Surahdetail/>} />
      <Route path="/juz" element={<Juz/>} />
    </Routes>
    </>
   
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
   <>
   
          <nav className="navbar">

              <Link to="/" className="logo">
                  Quran
              </Link>
              <div className="nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/surah">Surahs</Link>
                  <Link to="/audio">Audio</Link>
              </div>

          </nav>
   

   
   </>
  )
}

export default Navbar
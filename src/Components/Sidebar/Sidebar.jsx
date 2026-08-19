import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`hamburger ${isOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link to="/" className="logo" onClick={toggleSidebar}>
                        Quran
                    </Link>
                    <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                </div>
                <div className="sidebar-links">
                    <Link to="/" onClick={toggleSidebar}>Home</Link>
                    <Link to="/surah" onClick={toggleSidebar}>Surahs</Link>
                    <Link to="/audio" onClick={toggleSidebar}>Audio</Link>
                    <Link to="/juz" onClick={toggleSidebar}>Juz</Link>
                </div>
            </div>
            {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;

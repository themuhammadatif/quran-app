import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Surahdetail.css';

const Surahdetail = () => {
    const { id } = useParams();
    const [surah, setSurah] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.alquran.cloud/v1/surah/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSurah(data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching surah:", err);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="surah-detail-container">
            <div className="back-nav">
                <Link to="/Surah" className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Surahs
                </Link>
            </div>

            {loading ? (
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading Surah...</p>
                </div>
            ) : surah ? (
                <>
                    <header className="surah-banner glass-panel">
                        <div className="banner-bg-glow"></div>
                        <div className="surah-meta-badge">
                            SURAH {surah.number} • {surah.revelationType.toUpperCase()}
                        </div>
                        <h1 className="surah-title-en">{surah.englishName}</h1>
                        <h2 className="surah-title-ar">{surah.name}</h2>
                        <div className="surah-stats">
                            <span>{surah.numberOfAyahs} Verses</span>
                            <span className="dot-separator">•</span>
                            <span>{surah.englishNameTranslation}</span>
                        </div>
                        
                        <div className="bismillah">
                            ﷽
                        </div>
                    </header>

                    <div className="ayahs-list">
                        {surah.ayahs.map((ayah) => {
                            // Optionally remove bismillah from the first ayah text for cleaner display 
                            // since we already display it in the header
                            let arabicText = ayah.text;
                            if (ayah.numberInSurah === 1 && surah.number !== 1 && arabicText.startsWith('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')) {
                                arabicText = arabicText.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '').trim();
                            }

                            return (
                                <div className="ayah-card glass-panel" key={ayah.number}>
                                    <div className="ayah-header">
                                        <div className="ayah-number-badge">
                                            {ayah.numberInSurah}
                                        </div>
                                        <div className="ayah-actions">
                                            {/* <button className="icon-btn play-btn" title="Play Audio">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            </button> */}
                                            <button className="icon-btn details-btn" title="More Details">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="ayah-content">
                                        <p className="ayah-text-ar">
                                            {arabicText}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="error-message">Surah not found.</div>
            )}
        </div>
    );
};

export default Surahdetail;
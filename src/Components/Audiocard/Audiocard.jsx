import React from 'react'
import "./Audiocard.css"



const Audiocard = ({number, name, arabicname, ayahs,onPlay}) => {




  return (
  <>
<div>

        <div className="surah-card">

            
            <div className="surah-card-left">


                  



                <div className="surah-number">
                    {number}
                </div>

                <div className="play" style={{ cursor: 'pointer' }} title="Play">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={onPlay}>
                        <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                </div>

                <div className="surah-info">
                    <h3>{name}</h3>
                    <p>{ayahs} Ayahs</p>
                </div>
            </div>

            <div className="surah-arabic">
                      <h3>{arabicname}</h3>
            </div>
        </div>



</div>


  
  
  </>



  )
}

export default Audiocard
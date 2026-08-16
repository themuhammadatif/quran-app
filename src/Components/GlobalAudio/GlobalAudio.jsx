import React from 'react'
import "./GlobalAudio.css"
 import { useRef, useState } from 'react';

    

    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0)
        const [time, setTime] = useState(0)
const [duration, setDuration] = useState("00:00")




        const GlobalAudio = (number, name, arabicname) => {
  return (
    <>
          <div className="audio-player">
              <div className="player-info">
                  <div className="audio-number">{number}</div>

                  <div>
                      <h2>{name}</h2>
                      <p>{arabicname}</p>
                  </div>
              </div>

              <audio ref={audioRef} controls src={audioUrl} onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}

                  onTimeUpdate={(e) => {
                      const current = e.target.currentTime;

                      setTime(current);

                      const percent =
                          (current / e.target.duration) * 100;

                      setProgress(percent);
                  }}

                  onLoadedMetadata={(e) => {
                      setDuration(e.target.duration);
                  }}



                  style={{ display: "none" }}
              ></audio>

              <div className="player-controls">
                  <button onClick={handlePlay}>{isPlaying ? "⏸" : "▶"}</button>


                  <div className="progress">
                      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                  </div>

                  <span>{Math.floor(time)} / {Math.floor(duration)}s </span>
              </div>
          </div>
    
    </>
  )
}

export default GlobalAudio
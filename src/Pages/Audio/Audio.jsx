import Audioplayer from '../../Components/Audioplayer/Audioplayer';
import './Audio.css';
import { useState, useEffect } from 'react';

const Audio = () => {
    const [audio, setAudio] = useState([]);

useEffect(()=>{
  fetch("https://api.alquran.cloud/v1/surah")
  .then(res => res.json())
  .then(data => setAudio(data.data))




},[])




    return (
      <>
        <div className="audio-page">
            <div className="audio-header">
                <h1>Quran <span>Audio</span></h1>
                <p>Listen to the Holy Quran with beautiful recitations.</p>
            </div>
            <div>
                {audio.map((au)=> (
                    <Audioplayer number={au.number} name={au.englishName} arabicname={au.name}/>
                ))}
            </div>
</div>



        </>

    );
}

export default Audio;
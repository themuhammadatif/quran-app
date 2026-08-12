import React from 'react'
import Surahcard from '../../Components/Surahcard/Surahcard'
import { useEffect, useState } from 'react'
import "./Surah.css"



const Surah = () => {


  const[surahs,setSurahs] = useState([])

  useEffect(()=>{
    fetch("https://api.alquran.cloud/v1/surah")
    .then((res)=> res.json())
    .then((data)=>setSurahs(data.data))



    



  },[])


  return (
   <>


      <section className="surah-header">
        <h1>
          Surah <span>Index</span>
        </h1>

        <p>
          Explore the 114 Surahs of the Holy Quran with translations and details.
        </p>

        <div className="surah-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search by name, meaning or number..."
          />
        </div>
      </section>



      <div className="surah-grid">
        {surahs.map((surah) => (
          <Surahcard
            key={surah.number}
            number={surah.number}
            name={surah.englishName}
            arabicName={surah.name}
            ayahs={surah.numberOfAyahs}
          />
        ))}
      </div>

   </>
  )
}

export default Surah
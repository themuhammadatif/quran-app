import './Juz.css'
import Juzcard from '../../Components/Juzcard/Juzcard.jsx'
import { useEffect, useState } from 'react'

const Juz = () => {

const [juzs, setJuzs] = useState([])

    useEffect(() => {

        const data = Array.from({ length: 30 }, (_, index) => ({
            number: index + 1
        }))




        setJuzs(data)

        fetch("https://api.alquran.cloud/v1/juz/1/quran-uthmani")
        .then((res) => res.json())
        .then((data) => (data.data))




    }, [])



  return (
  <>



<div className='juz-container'>




{juzs.map((item)=>(
    <div key={item.id}>
        <Juzcard 
        
        page={item.page}
       
        />
    </div>
))}


</div>
  </>
  )
}

export default Juz
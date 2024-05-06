import React from 'react'
import './Home.css';
import homelogo from '../../assets/gamer.jpg'

function Home() {
  return (
    <>
    <div className='bg-Eggplant'>
    <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Os Melhores Games você encontra aqui!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-black py-2 px-4'>Ver games</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homelogo} alt="" className='w-2/3' />
      
            </div>
          </div>
    </div>
    </>
  )
}

export default Home
import React from 'react'
import { useNavigate } from 'react-router-dom'

const hostBasics = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
     
      <h1 className='text-black mt-3 text-3xl'>Share some basics about your place</h1>
     
      <div className="mt-7 text-black flex">
       
        <p className='flex justify-start'>Guests</p>
        <div className='flex justify-end ml-80'>
       
        <button onClick>-</button>
        <h3>Quantity:</h3>
        <button onClick>+</button>
      </div>
      </div>
      <div className="mt-8 text-black flex">
      
        <p className='flex justify-start'>Bedrooms</p>
        <div className='flex justify-end ml-80'>
       
        <button onClick>-</button>
        <h3>Quantity:</h3>
        <button onClick>+</button>
      </div>

      </div>
      <div className="mt-8 text-black flex justify-start">
       
        <p>Beds</p>
        <div className='flex justify-end ml-80'>
       
        <button onClick>-</button>
        <h3>Quantity:</h3>
        <button onClick>+</button>
      </div>

      </div>
      <div className="mt-8 text-black flex justify-start">
    
      <p>Bathrooms</p>
      <div className='flex justify-end ml-80'>
       
      <button onClick>-</button>
      <h3>Quantity:</h3>
      <button onClick>+</button>
    </div>

      </div>
      </div>
      <div className="bg-black w-full mt-16 relative">
      <div className="h-px w-30/100 bg-black"></div>
      <div className="h-px w-70/100 bg-black"></div>
      </div>
    
      <div className='mt-12'>
      <button
      onClick={() => navigate('/hostStPlace')}
      className="bg-black text-white px-4 py-2"
    >Next</button>
      </div>
    </div>
  

    </>
  )
}

export default hostBasics
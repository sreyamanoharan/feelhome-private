import React from 'react'
import { useNavigate } from 'react-router-dom'

const hostPrice = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>
    <div className='text-center'>
 
    <h1 className='text-black mt-3 text-3xl'>Now set your place</h1>
    <h3 className='text-black mt-8'>
    you can change it anytime
    </h3>
    </div>
    <div class="flex items-center">
    <div class="text-xl font-bold text-green-600">₹<span id="price">99.99</span></div> 
    <div class="ml-2">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v5m0 0-6-6m6 6 6-6"/>
        </svg>
      </button>
    </div>
    </div>
    <div className='mt-12'>
    <button onClick={()=>navigate('/hostFinal')} className='bg-black text-white px-4 py-2'>Next</button>
    </div>
    </div>
 
    
    </>
  )
}


export default hostPrice
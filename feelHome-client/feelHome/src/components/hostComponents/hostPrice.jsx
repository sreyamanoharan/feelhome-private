import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSelectedPrice } from '../../store/slice/Host'


const hostPrice = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [price, setPrice] = useState("")

  const handleSubmit = async () => {
    dispatch(addSelectedPrice({selectedPrice: price}))
    navigate('/hostFinal')
  }

  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>
    <div className='text-center'>
 
    <h1 className='text-black mt-3 text-3xl'>Now set your place</h1>
    <h3 className='text-black mt-8'>
    you can change it anytime
    </h3>
    </div>
    <div className="flex flex-col items-center">
    <div className="text-xl font-bold text-green-600 shadow mt-2 shadow-gray-400 rounded-md">₹<input type='number' id="price" className='outline-none p-2 rounded-md bg-white w-28' placeholder='Amount' value={price} onChange={(e) => setPrice(e.target.value)}/></div> 
  
    </div>
    <div className='mt-10'>
    <button onClick={async ()=>{
      await handleSubmit()
    }} className='bg-black text-white px-4 py-2'>Next</button>
    </div>
    </div>
 
    
    </>
  )
}


export default hostPrice
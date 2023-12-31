import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import axiosInstance from '../../api/axios';


const hostFinish = () => {
  const navigate= useNavigate()



  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
      <a className='text-gray-900'>Step 3</a>
      <h1 className='text-gray-900 mt-3 text-3xl'>Finish up and publish</h1>
      <h3 className='text-gray-900 mt-8'>
        Finally, you'll choose booking settings, set up pricing and publish your
        <br />
        listing.
      </h3>
    </div>
   
    <div className="bg-gray-900 w-full mt-16 relative">
    <div className="h-px w-30/100 bg-gray-900"></div>
    <div className="h-px w-70/100 bg-gray-900"></div>
  </div>
  
    <div className='mt-12 flex gap-16'>
    <button onClick={()=>navigate(-1)}className='bg-gray-900 text-white px-4 py-2'>Back</button>
    <button onClick={()=>navigate('/host/hostPrice')}className='bg-gray-900 text-white px-4 py-2'>Next</button>
    </div>
    </div>

    </>
  )
}

export default hostFinish
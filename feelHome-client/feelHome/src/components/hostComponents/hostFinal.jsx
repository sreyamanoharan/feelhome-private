import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../api/axios';
import { reduxClear } from '../../store/slice/Host';

const hostFinal = () => {
  const navigate= useNavigate()
  const dispatch=useDispatch()

  const userEmail=useSelector(state=>state.User.userId)
  const hostData=useSelector(state=>state.Host)
  console.log(hostData,userEmail,'here is the hostDatasssssss');


    const handleSubmit = async () => {
      
      await axiosInstance.post('/host/postData',{hostData,userEmail})
      dispatch(reduxClear({}))
      navigate('/host/hostHome')
    }

  return (
    <>
     <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

<div className='text-center'>
  <a className='text-black'>Congratulationssss</a>
  <h1 className='text-black mt-3 text-3xl'></h1>
  <h3 className='text-black mt-8'>
   
    listing.
  </h3>
</div>

<div className="bg-black w-full mt-16 relative">
<div className="h-px w-30/100 bg-black"></div>
<div className="h-px w-70/100 bg-black"></div>
</div>

<div className='mt-12 cursor-pointer'>
    <button onClick={handleSubmit} className='bg-black text-white px-4 py-2'>Next</button>
    </div>
</div>

    </>
  )
}

export default hostFinal
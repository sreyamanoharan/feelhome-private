import React, { useEffect ,useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {GiTreehouse} from 'react-icons/gi'
import {TbBeachOff} from 'react-icons/tb'
import {GiCampingTent} from 'react-icons/gi'
import {MdHouseboat} from 'react-icons/md'
import {MdMeetingRoom} from 'react-icons/md'
import axiosInstance from '../../api/axios'

const hostType = () => {

    const [category,setCategory] =useState([])
    useEffect(()=>{

    axiosInstance.get('/getCategory').then((res)=>{
        setCategory(res.data.category)
        console.log(res.data.category);
    }).catch(err=>{
        console.log(err);
    })
    },[])


  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>
      
    <div className='text-center'>
     
      <h1 className='text-black mt-3 text-3xl'>Which of these best describes your place</h1>
      <div>
      <div class="flex">
      
      {category.map(category=>(
          
        <div className="w-1/3 p-4  border border-black  text-center mt-6 ">
        <div className="text-3xl text-black">
        <img src={category.categoryImage}></img></div>
        <div className='text-black'>{category.heading}</div>
        </div>

  ))}

  </div>

    </div>
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
    </div>
  
    <div className='mt-12'>
    <a href='/hostPlace' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>
    
    </>
  )
}

export default hostType
import React from 'react'
import {AiOutlineWifi} from 'react-icons/ai'
import {PiTelevisionSimpleBold} from 'react-icons/pi'
import {GiCampingTent} from 'react-icons/gi'
import {GiWashingMachine} from 'react-icons/gi'


const hostAmenities = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
     
      <h1 className='text-black mt-3 text-3xl'>Which of these best describes your place</h1>
      <div>
      <div class="flex">
      
    <div class="w-1/3 p-4  border border-black  text-center mt-6">
    <div class="text-3xl text-black"><AiOutlineWifi/></div>
    <div className='text-black'>Beach House</div>
    </div>
    <div className="w-1/3 p-4 border border-black  text-center mt-6">
    <div className="text-3xl text-black"><GiCampingTent/></div>
    <div className='text-black'>Camping</div>
    </div>
    <div className="w-1/3 p-4 border border-black  text-center mt-6">
    <div className="text-3xl text-black "> <PiTelevisionSimpleBold/></div>
    <div  className='text-black'>Treehouse</div>
    </div>
    <div className="w-1/3 p-4 border border-black  text-center mt-6">
    <div className="text-3xl text-black "> <GiWashingMachine/></div>
    <div  className='text-black'>Treehouse</div>
    </div>
    </div>

    </div>
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
    </div>
  
    <div className='mt-12'>
    <a href='/hostPhotos' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>
    </>
  )
}

export default hostAmenities
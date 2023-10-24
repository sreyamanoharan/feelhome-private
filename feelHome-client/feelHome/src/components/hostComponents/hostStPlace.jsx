import React from 'react'

const hostStPlace = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
      <a className='text-black'>Step 2</a>
    
      <h1 className='text-black mt-3 text-3xl'>Make your place stand out</h1>
      <div className='flex justify-start '>
      <h3 className='text-black mt-8'>
        in this step, you'll add some of the amenities your place
        <br />
       offers, plus 5 or more photos. Then you'll create a title and 
        <br />
        description
      </h3>
      </div>
      
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
  </div>
  
    <div className='mt-12'>
    <a href='/hostAmenities' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>
    </>
  )
}

export default hostStPlace
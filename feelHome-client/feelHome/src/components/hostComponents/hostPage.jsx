import React from 'react'


const hostPage = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
      <a className='text-black'>Step 1</a>
      <h1 className='text-black mt-3 text-3xl'>Tell us about your place</h1>
      <h3 className='text-black mt-8'>
        in this step, we'll ask you which type of property you have and if
        <br />
        guests will book the entire place or just a room. Then let us know the
        <br />
        location and how many guests can stay.
      </h3>
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
  </div>
  
    <div className='mt-12'>
    <a href='/hostType' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>

    </>
  )
}

export default hostPage
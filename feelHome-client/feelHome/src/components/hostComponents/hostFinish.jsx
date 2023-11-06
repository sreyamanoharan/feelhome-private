import React from 'react'

const hostFinish = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
      <a className='text-black'>Step 3</a>
      <h1 className='text-black mt-3 text-3xl'>Finish up and publish</h1>
      <h3 className='text-black mt-8'>
        Finally, you'll choose booking settings, set up pricing and publish your
        <br />
        listing.
      </h3>
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
  </div>
  
    <div className='mt-12'>
    <a href='' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>

    </>
  )
}

export default hostFinish
import React from 'react'
import {useNavigate} from 'react-router-dom'

const hostFinal = () => {
    const navigate= useNavigate()
  return (
    <>
     <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

<div className='text-center'>
  <a className='text-black'>Step 4444</a>
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
</div>
    </>
  )
}

export default hostFinal
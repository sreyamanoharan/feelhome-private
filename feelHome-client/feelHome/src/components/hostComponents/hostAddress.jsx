import React from 'react'

const hostAddress = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

  
     
    <h1 className="text-black mt-3 text-3xl">Confirm your Address</h1>
    <div class="bg-white p-4 rounded-lg shadow-lg">
    <form>
    <div className='mt-4 text-black' >
      <label for="name">Name  : </label>
      <input className='bg-white border-black' type="text" id="name" name="name" required/>
    </div>
    <div className='mt-4 text-black'>
      <label for="houseAddress">House Address   :  </label>
      <input className='bg-white border-black' type="text" id="houseAddress" name="houseAddress" required/>
    </div>
    <div className='mt-4 text-black'>
      <label for="city">City  : </label>
      <input className='bg-white border-black' type="text" id="city" name="city" required/>
    </div>
    <div className='mt-4 text-black'>
      <label for="state">State : </label>
      <input className='bg-white border-black' type="text" id="state" name="state" required/>
    </div>
    <div className='mt-4 text-black'>
      <label for="zip">Pin Code : </label>
      <input className='bg-white border-black' type="text" id="zip" name="zip" required/>
    </div>
   
  </form>
  </div>
  

    <div className='mt-12'>
    <a href='hostBasics' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>
    </>
  )
}

export default hostAddress
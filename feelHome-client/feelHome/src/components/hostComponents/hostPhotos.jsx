import React from 'react'

const hostPhotos = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
    
      <h1 className='text-black mt-3 text-3xl'>Add some photos</h1>
      <div className="border border-gray-300 rounded p-4 mt-6 mb-7 ">
      <div className='flex justify-center '>
      <div>
     
      <label
        htmlFor="file-input"
        className="photo-upload-button relative inline-block cursor-pointer mt-6 mb-8 ml-8 mr-8"
      >
    <div className="add-photo-icon w-40 h-40 bg-gray-300 text-gray-600 flex justify-center items-center text-4xl">
            +
          </div>
 
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange=""
          className="hidden"
        />
      </label>
    </div>
      </div>
</div>

     
      
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
  </div>
  
    <div className='mt-12'>
    <button className='bg-black text-white px-4 py-2'>Next</button>
    </div>
    </div>
    </>
  )
}

export default hostPhotos
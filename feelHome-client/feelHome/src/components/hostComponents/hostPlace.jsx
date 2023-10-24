import React from 'react'
import {MdMeetingRoom} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineMeetingRoom} from 'react-icons/md'


const hostPlace = () => {
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className=''>
     
    <h1 className="text-black mt-3 text-3xl">What type of place will guests have</h1>
    <div>
      <div className="mt-5">
        <div className="w-full p-4 border border-black">
          <div className="flex items-center">
            <div>
              <div className="text-2xl text-black">An entire place</div>
              <div className="text-sm text-black">Guests have the whole place to themselves</div>
            </div>
            <div className="ml-auto text-3xl text-black"><AiFillHome/></div>
          </div>
        </div>
        <div className="w-full p-4 border  border-black">
          <div className="flex items-center">
            <div>
              <div className="text-2xl text-black">A room</div>
              <div className="text-sm text-black">Guests have thier own room in a home, plus access to shared places</div>
            </div>
            <div className="ml-auto text-3xl text-black"><MdMeetingRoom/></div>
          </div>
        </div>
        <div className="w-full p-4 border  border-black">
          <div className="flex items-center">
            <div>
              <div className="text-2xl text-black">Shared room</div>
              <div className="text-sm text-black">Guests sleep in room or common area that may be shared with you or others</div>
            </div>
            <div className="ml-auto text-3xl text-black"><MdOutlineMeetingRoom/></div>
          </div>
        </div>
      </div>
    </div>

    

    </div>
 
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
  </div>
  

    <div className='mt-12'>
    <a href='/hostLocation' className='bg-black text-white px-4 py-2'>Next</a>
    </div>
    </div>
    </>
  )
}

export default hostPlace
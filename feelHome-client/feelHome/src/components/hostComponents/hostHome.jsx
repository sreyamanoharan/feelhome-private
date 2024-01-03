import React from 'react'
import Home from '../../../public/static/image/HostHome.webp'
import map from '../../../public/static/image/map.png'



const hostHome = () => {

  return (

    <>
      <div className='bg-white flex'>
        <div className='bg-white flex w-full h-screen justify-end items-center' >

          <div className='bg-white w-72 h-24'>

            <p className='text-center text-4xl text-red-600'> feelHome</p>
            <p className='text-center text-3xl text-black mt-1'>You can earn...</p>
          </div>
        </div>
        <div className='bg-white w-full h-screen flex items-center' >


          <img className='bg-orange-400 h-5/6 w-9/12' src={map} />
        </div>

      </div>
      <div>
        <p></p>
      </div>
      <div className='bg-blue-400 w-full h-[30rem]'>
        <img src={Home}></img>
      </div>
      <div className='bg-red-700 w-full h-80 flex mt-10'>
        <div className='bg-green-400 w-full h-36'>
          <p className='text-black mt-5 ml-5'>One-to-one guidance from a Superhost<br />
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
        </div>
        <div className='bg-red-400 w-full h-36'>
          <p className='text-black mt-5 ml-5'>An experienced guest for your first booking<br />
            For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
        </div>
        <div className='bg-green-400 w-full h-36'>
          <p className='text-black mt-5 ml-5'>Specialised support from feelHome<br />
            New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
        </div>
      </div>
      <div className='bg-black w-full h-80'>

      </div>

    </>
  )
}

export default hostHome






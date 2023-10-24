import React from 'react'

import home from '../../../../src/images/homestay.jpg'


const Navbar = () => {
  return (
    <div className="navbar bg-white">

    <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-red-500">feelHome</a>

    </div>
    <div class="">
    <a href='/hostHome' class="px-4 py-2 mr-4 bg-red-700 rounded text-white">Host your Home</a>
  </div>
  
    <div className="flex-none">
      
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={home} />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge"></span>
            </a>
          </li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Navbar
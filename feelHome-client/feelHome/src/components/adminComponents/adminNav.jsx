import React, { useState } from 'react';



const adminNav = () => {

  
  return (
    <div>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-green-800 text-base-content ">
      {/* Sidebar content here */}
      <li className='mt-20'><a className="text-lg font-bold">User Management</a></li>
      <li><a className="text-lg font-bold">Host Management</a></li>
      <li><a className="text-lg font-bold">Category Management</a></li>
      <li><a className="text-lg font-bold">Verify Hosts</a></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default adminNav
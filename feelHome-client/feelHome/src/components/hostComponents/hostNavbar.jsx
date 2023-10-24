import React from 'react'
import {useLocation} from 'react-router-dom'
import {AiFillPlusSquare} from 'react-icons/ai'

const hostNavbar = () => {

  const location=useLocation()
  const isHostProps=location.pathname==='/hostProps'

  return (
   <div className="navbar bg-white text-red-600">
   <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">feelHome</a>
   </div>
   <div className="flex-none">
   <ul className="menu menu-horizontal px-3">
     <li><a href='hostHome' className="text-black hover:bg-gray-600 hover:text-white text-opacity-60 dark:text-opacity-80  transition-colors duration-300">Home</a></li>
     <li>
       
         <a href='hostProps' className="text-black hover:bg-gray-600 hover:text-white text-opacity-60 dark:text-opacity-80  transition-colors duration-300">My Properties</a>
       
     </li>
   
    
    
   </ul>

   {isHostProps && (
    <a href='/hostPage' className="text-2xl">
      <AiFillPlusSquare />
    </a>
  )}

 </div>
 
</div>
  
)
}

export default hostNavbar
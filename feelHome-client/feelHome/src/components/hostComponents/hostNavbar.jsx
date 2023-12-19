import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {AiFillPlusSquare} from 'react-icons/ai'


const hostNavbar = () => {
  
  const navigate=useNavigate()
  const location=useLocation()
  const isHostProps=location.pathname==='/host/hostProps'

  return (
   <div className="navbar bg-white text-red-600">
   <div className="flex-1">
    <button onClick={()=>{navigate('/')}} className="btn btn-ghost normal-case text-xl">feelHome</button>
   </div>
   <div className="flex-none">
   <ul className="menu menu-horizontal px-3">
     <li><a href='/host/hostHome' className="text-black hover:bg-gray-600 hover:text-white text-opacity-60 dark:text-opacity-80  transition-colors duration-300">Home</a></li>
     <li>
       
         <button onClick={()=>{navigate('/host/hostProps')}} className="text-black hover:bg-gray-600 hover:text-white text-opacity-60 dark:text-opacity-80  transition-colors duration-300">My Properties</button>
       
     </li>
  
    
    
   </ul>

   {isHostProps && (
    <a href='/host/hostPage' className="text-2xl">
      <AiFillPlusSquare />
    </a>
  )}

 </div>
 
</div>
  
)
}

export default hostNavbar
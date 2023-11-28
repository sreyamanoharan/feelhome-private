import React, { useEffect } from 'react'
import axiosInstance from '../../../api/axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const bookings = () => {

const [booking,setBooking]=useState([])

const userId=useSelector(state=>state.User.userId)
console.log(userId);


useEffect(()=>{
    axiosInstance.get(`/booking/${userId}`).then((res)=>{
       if(res.data.data){
        setBooking(res.data.data)
       } 
    })
  
},[])
console.log(booking);


 return (
   
 <div className="overflow-x-auto bg-white h-screen ">


  <table className="table text-black">

 
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th></th>
        <th>Category</th>
        <th>price</th>
        <th>Location</th>
       
        <th></th>
      </tr>
    </thead>
    <tbody>
    {booking.map((data,index)=>(

       
      <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={data?.propertyId.images} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold"><data className="selectedCategory"></data></div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        {data.propertyId.selectedCategory}
      </td>
      <td>
        {data.Amount}
      </td>
      <td>
        {data.propertyId.selectedLocation}
      </td>
     
      <th>
        <button className="btn btn-ghost btn-xs text-black">Cancel Booking</button>
      </th>
    </tr>
  

))}
  </tbody> 
    
  </table>
</div>

   
  )
}

export default bookings
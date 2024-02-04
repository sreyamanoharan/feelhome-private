import React, { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../../api/axios'

const Propertyverify = () => {
  
    const [added,setAdded]=useState([])
    const [propId,setPropId]=useState(null)


    useEffect(()=>{
        axiosInstance.get('/admin/addedProp').then((res)=>{
            if(res.data.data){
                setAdded(res.data.data)
                console.log(res.data.data);
            }
            
        })
    })


  return (

   
     <div className='bg-[#f4f7fe] p-5 h-screen  text-gray-900'>
     <div style={{ textAlign: 'center'}}>
      <a  style={{
          color: 'black',
          cursor: 'pointer',
          fontSize: '24px',
        }}>Property Management</a>

      </div>

      <div className='bg-white text-gray-900'>
<table className="table text-gray-900">


{/* head */}
<thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <th></th>
    <th className='text-gray-900'>Category</th>
    <th className='text-gray-900'>price</th>
    <th className='text-gray-900' >Location</th>

    <th></th>
  </tr>
</thead>
<tbody>

 (


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
              {/* <img src={data?.propertyId?.images[0]} alt="Avatar Tailwind CSS Component" /> */}
            </div>
          </div>
          <div>
            <div className="font-bold"><data className="selectedCategory"></data></div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      {/* <td>
        {data?.propertyId?.selectedCategory}
      </td> */}
      {/* <td>
        {data.Amount}
      </td>
      <td>
        {data?.propertyId?.selectedLocation}
      </td> */}

      <th>
        {/* <button
          onClick={() => { setBookingId(data._id), setmodalOpen(true) }}
          disabled={cancellationLoading}
        >
          {cancellationLoading ? 'Cancelling...' : 'Cancel Booking'}
        </button> */}
      </th>
    </tr>


  )
</tbody>

</table>

    </div>
    </div>
  )
}

export default Propertyverify
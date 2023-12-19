import React, { useEffect } from 'react'
import axiosInstance from '../../api/axios'
import { useState } from 'react'
import toast from 'react-hot-toast'


const userList = () => {

    const [user,setUser]=useState([])
    
    useEffect(()=>{
        axiosInstance.get('/admin/getUser').then((res)=>{
            setUser(res.data.user)
        }).catch((error)=>{
            console.log(error);
        })
    })

    const statusChange = (userId, blocked) => {
        axiosInstance
          .patch(
            '/admin/userStatus',
            { userId, blocked }
          )
          .then((res) => {
            toast.success(res?.data?.message);
            setReload(!reload);
          })
          .catch((err) => {
            if (err?.response?.data?.errmsg) {
              toast.error(err?.response?.data?.errmsg);
            }
          });
      };

  return (
    <>

   
     <div className='bg-white h-screen'>
     <h1>User Management</h1>
      <table className="w-full mt-16 border border-red-500">
        <thead>
          <tr>
          <th className="px-4 py-2 text-black">Profile Image</th>
            <th className="px-4 py-2 text-black">Name</th>
            <th className="px-4 py-2 text-black">Email</th>
            <th className="px-4 py-2 text-black">Options</th>
          </tr>
        </thead>
        <tbody>
        {user.map((data,index) => (
          <tr key={data._id}> 
          <td className="px-4 py-2 text-center">
                <img src={data?.profileImage} alt={data.profileImage}  width="100px" className="mx-auto"/>
              </td>
              <td className="px-4 py-2 text-center text-black">{data.name}</td>
              <td className="px-4 py-2 text-center text-black">{data.email}</td>
              <td className="px-4 py-2 text-center text-black">
              {data.isBlocked === false ? (
                 
                <button onClick={() => statusChange(data?._id, data?.isBlocked)}  className="btn btn-secondary">
                 Block
                </button>
              ) : (
                <button onClick={() => statusChange(data._id, data.isBlocked)} className="btn btn-primary">
                  Unblock
                </button>
              )}
            </td>
               
            </tr>
        ))}
        </tbody>
      </table>
    
    </div>
    </>
  )
}

export default userList
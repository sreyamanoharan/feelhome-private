import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../../store/slice/User'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance from '../../../api/axios'
import { CgMenu } from "react-icons/cg";

const Navbar = () => {

  const [details, setDetails] = useState('');
  const userId = useSelector(state => state.User.userId)
  console.log(userId);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    axiosInstance.get(`/getUser/${userId}`).then((res) => {
      setDetails(res?.data?.users);
    });
  }, []);


  return (
    <div className="navbar flex justify-between bg-white">
      {/* all area  */}
      <Link to='/' className="btn btn-ghost normal-case text-xl text-red-500">feelHome</Link>

      {/*start middle area  */}
      <div className='md:block hidden'>
        <Link to='/host/hostHome' className="px-4 py-2 mr-4 bg-red-700 rounded text-white">Host your Home</Link>
        <Link to='/bookings' className="px-4 py-2 mr-4 bg-red-700 rounded text-white">My Bookings</Link>
        <Link to='/allProperties' className="px-4 py-2 mr-4 bg-red-700 rounded text-white">All Properties</Link>
        <Link to='/userChat' className="px-4 py-2 mr-4 bg-red-700 rounded text-white">Chat</Link>
      </div>
      {/*end middle area  */}
      {/* <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl text-red-500">feelHome</a>

    </div>
    <div className="">
  </div>
  <div className="">
  </div>
  <div className="">
  </div>
  <div className="">
  </div>
  <div className="">
  </div> */}

      <div className="flex-none md:block hidden">

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={details?.profileImage} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => { navigate("/userProfile") }} className="justify-between">
                Profile
                <span className="badge"></span>
              </a>
            </li>
            <li><a onClick={() => {
              dispatch(userLogout())
              navigate('/userLogin')
            }}>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className='md:hidden block dropdown dropdown-end'>
        <label tabIndex={0}>
          <CgMenu className='w-8 h-8' />
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-red-900 pl-6 rounded-lg leading-8 w-52">
          {/* <li className='w-full h-full'> */}
          <div className='flex gap-3 mb-2' onClick={() => { navigate("/userProfile") }}>
          <img src={details?.profileImage} className='w-8 h-8 rounded-full ' />
          <h1>Profile</h1>
          </div>
          <Link to='/host/hostHome' className="text-white">Host your Home</Link>
          <Link to='/bookings' className="text-white">My Bookings</Link>
          <Link to='/allProperties' className="text-white">All Properties</Link>
          <Link to='/userChat' className="text-white">Chat</Link>
          <h1 className='text-white' onClick={() => {dispatch(userLogout()),navigate('/userLogin')}} >Logout</h1>
          {/* </li> */}
        </ul>

      </div>
      {/* end all area  */}
    </div>
  )
}

export default Navbar
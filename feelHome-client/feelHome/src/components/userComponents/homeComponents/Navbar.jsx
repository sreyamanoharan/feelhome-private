import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../../store/slice/User'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosInstance from '../../../api/axios'
import { CgMenu } from "react-icons/cg";
import { TbMessageChatbot } from "react-icons/tb";


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

  const isLinkActive = (pathname) => {
    // Check if the current location matches the pathname
    return location.pathname === pathname;
  };


  return (

    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
    <div className="navbar flex justify-between h-28 bg-white">
    
      <Link to='/' className="btn btn-ghost normal-case text-3xl text-red-500">feelHome</Link>

      <div className='xl:flex hidden ml-96'>
      <Link to='/host/hostHome' className={`px-4 py-2 mr-4 ${isLinkActive('/host/hostHome') ? 'bg-blue-500' : 'bg-red-600'} rounded-full text-white`}>
        Host your Home
      </Link>
      <Link to='/bookings' className={`px-4 py-2 mr-4 ${isLinkActive('/bookings') ? 'bg-blue-500' : 'bg-red-600'} rounded-full text-white`}>
        My Bookings
      </Link>
      <Link to='/allProperties' className={`px-4 py-2 mr-4 ${isLinkActive('/allProperties') ? 'bg-blue-500' : 'bg-red-600'} rounded-full text-white`}>
        All Properties
      </Link>
      <Link to='/userChat' className="px-4 py-2 text-red-500 text-4xl">
        <TbMessageChatbot color={isLinkActive('/userChat') ? 'blue' : 'red'} />
      </Link>
    </div>
    

      <div className="flex-none xl:block hidden">

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
      <div className='xl:hidden block dropdown dropdown-end'>
        <label tabIndex={0}>
          <CgMenu className='w-8 h-8' />
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-red-900 pl-6 rounded-lg leading-8 w-52">

          <div className='flex gap-3 mb-2' onClick={() => { navigate("/userProfile") }}>
            <img src={details?.profileImage} className='w-8 h-8 rounded-full ' />
            <h1>Profile</h1>
          </div>
          <Link to='/host/hostHome' className="text-white">Host your Home</Link>
          <Link to='/bookings' className="text-white">My Bookings</Link>
          <Link to='/allProperties' className="text-white">All Properties</Link>
          <Link to='/userChat' className="text-white">Chat</Link>
          <h1 className='text-white' onClick={() => { dispatch(userLogout()), navigate('/userLogin') }} >Logout</h1>

        </ul>

      </div>

    </div>
    </div>
  )
}

export default Navbar
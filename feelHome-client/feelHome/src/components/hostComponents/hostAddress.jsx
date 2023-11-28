import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { addAddress } from '../../store/slice/Host';
import { useDispatch, useSelector } from 'react-redux';



const hostAddress = () => {
  const hostData = useSelector(state => state.Host)
  console.log(hostData,"this is my host redux value");
  const [address, setAddress] = useState({
    name: '',
    houseAddress: '',
    city: '',
    state: '',
    pin: '',
  });
  const dispatch=useDispatch()
  const navigate = useNavigate();

  const handleAddressChange=(e)=>{
    const {name ,value}=e.target
    setAddress({
     ...address,
     [name]:value
   })
  
  }
 
 
  const reduxAddress=(e)=>{
    e.preventDefault();
    console.log(address);
    dispatch(addAddress({address:address}))
     
    navigate('/host/hostBasics')
  } 
  

  

  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>
    <h1 className="text-black mt-3 text-3xl">Confirm your Address</h1>
    <div className="bg-white p-4 rounded-lg shadow-lg">
    <form onSubmit={reduxAddress}>
    <div className='mt-4 text-black' >
      <label htmlfor="name">Name  : </label>
      <input className='bg-white border-black' type="text" id="name" name="name" 
      value={address.name} onChange={handleAddressChange} 
      required/>
    </div>
    <div className='mt-4 text-black'>
      <label htmlFor="houseAddress">House Address   :  </label>
      <input className='bg-white border-black' type="text" id="houseAddress" name="houseAddress" 
      value={address.houseAddress} onChange={handleAddressChange} 
       required/>
    </div>
    <div className='mt-4 text-black'>
      <label htmlfor="city">City  : </label>
      <input className='bg-white border-black' type="text" id="city" name="city" 
      value={address.city}   onChange={handleAddressChange} 
      required/>
    </div>
    <div className='mt-4 text-black'>
      <label htmlfor="state">State : </label>
      <input className='bg-white border-black' type="text" id="state" name="state"
        value={address.state}  onChange={handleAddressChange}  
        required/>
    </div>
    <div className='mt-4 text-black'>
      <label htmlfor="zip">Pin Code : </label>
      <input className='bg-white border-black' type="text" id="pin" name="pin" 
       value={address.pin}  onChange={handleAddressChange} 
       required/>
    </div>
   
    <div className='mt-12'>
    <button type='submit' className='bg-black text-white px-4 py-2'>Next</button>
    </div>
  </form>
  </div>
  

    </div>
    </>
  )
}

export default hostAddress
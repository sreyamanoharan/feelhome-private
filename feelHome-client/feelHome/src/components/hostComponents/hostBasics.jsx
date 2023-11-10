import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedBasics } from '../../store/slice/Host';

// const QuantityCounter = () => {
//   const hostData = useSelector(state => state.Host)
//   console.log(hostData,"this is my host redux value");
//   const [quantity, setQuantity] = useState(0);

//   const updateQuantity = (change) => {
//     setQuantity(quantity + change);
//   };

//   return (
//     <div className="mt-7 text-black flex">
//       <p className="flex justify-start">Guests</p>
//       <div className="flex justify-end ml-80 ">
//         <button className='' onClick={() => updateQuantity(-1)}>-</button>
//         <h3> {quantity}</h3>
//         <button onClick={() => updateQuantity(1)}>+</button>
//       </div>
//     </div>
//   );
// };

// const BedroomCounter =()=>{
//   const [quantity, setQuantity] = useState(0);
//   const updateQuantity = (change) => {
//     setQuantity(quantity + change);
// }
// return (
//   <div className="mt-7 text-black flex">
//     <p className="flex justify-start">Bedrooms</p>
//     <div className="flex justify-end ml-80">
//       <button className='' onClick={() => updateQuantity(-1)}>-</button>
//       <h3> {quantity}</h3>
//       <button onClick={() => updateQuantity(1)}>+</button>
//     </div>
//   </div>
// );
// }

// const BedCounter=()=>{
//   const [quantity, setQuantity] = useState(0);
//   const updateQuantity = (change) => {
//     setQuantity(quantity + change);
// }
// return (
//   <div className="mt-7 text-black flex">
//     <p className="flex justify-start">Beds</p>
//     <div className="flex justify-end ml-80">
//       <button className='' onClick={() => updateQuantity(-1)}>-</button>
//       <h3> {quantity}</h3>
//       <button onClick={() => updateQuantity(1)}>+</button>
//     </div>
//   </div>
// );
// }

// const BathroomCounter=()=>{
//   const [quantity, setQuantity] = useState(0);
//   const updateQuantity = (change) => {
//     setQuantity(quantity + change);
// }
// return (
//   <div className="mt-7 text-black flex">
//     <p className="flex justify-start">Bathrooms</p>
//     <div className="flex justify-end ml-80">
//       <button className='' onClick={() => updateQuantity(-1)}>-</button>
//       <h3> {quantity}</h3>
//       <button onClick={() => updateQuantity(1)}>+</button>
//     </div>
//   </div>
// );
// }

const HostBasics = () => {
  const hostData = useSelector(state => state.Host)
  console.log(hostData,"this is my host redux value");
  const navigate = useNavigate();
  const [basics, setBasics] = useState({
    Guests: 0,
    Bedrooms: 0,
    Beds: 0,
    Bathrooms: 0,
  });
  const handleIncrease = (item) => {
    setBasics((prevBasics) => ({
      ...prevBasics,
      [item]: prevBasics[item] + 1,
    }));
  };
  const handleDecrease = (item) => {
    setBasics((prevBasics) => ({
      ...prevBasics,
      [item]: Math.max(prevBasics[item] - 1, 0),
    }));
  };
  const dispatch=useDispatch()
  const dataChange=(e)=>{
    const {name,value}=e.target
    setBasics({
      ...basics,
      [name]:value
    })
    navigate('/hostStPlace')
  }

  
  const reduxBasics=(e)=>{
    e.preventDefault();
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    dispatch(addSelectedBasics({selectedBasics:basics}))
    console.log(hostData,"this is my host redux value");
   
  } 

  return (
    <div className='w-full h-screen flex justify-center items-center bg-white'>
    {/* <h2>Basic Counts</h2> */}
    <div className='text-black'>
      <ul>
        {Object.keys(basics).map((item) => (
          <li key={item} className='flex space-x-10'>
            <h1>{item}</h1>
            <button className='border-2 border-black p-1 ' onClick={() => handleDecrease(item)}>-</button>
             <p>{basics[item]} {item}</p>
            <button className='border-2 border-black p-1 '  onClick={() => handleIncrease(item)}>+</button>
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>

        <button onClick={reduxBasics} className='bg-black p-2 m-8 text-white'>Next</button>
      </div>
        </div>
    </div>
  );
};

export default HostBasics;

import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams, useRoutes } from 'react-router-dom'
import axiosInstance from '../../../api/axios'
import { useSelector } from 'react-redux'

const PropertyDetail = () => {
const [datas,setDatas]=useState({})
const [reload,setReload]=useState(false)
const {id}=useParams()
const navigate =useNavigate()
console.log(id);

const userId=useSelector(state=>state.User.userId)
console.log(userId);

useEffect(() => {
  if (id) {
    axiosInstance.get(`/getDetails/${id}`)
      .then((res) => {
        setDatas(res.data.details);
        console.log(res.data.details, '====================');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, [id]);



const createChat=async(userId,hostId)=>{
  const data=await axiosInstance.post('/chat',{userId,hostId})
  console.log(data,"created");
  navigate('/userChat')
}
let hostId=datas?.hostId
console.log("oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",hostId);

  return (
    

    <div className="bg-white h-[90vh]">
       {/* <button  className='bg-red-800'  onClick={() => createChat(userId, hostId)}>chat</button> */}
    {/* <h1 className="text-3xl text-black">Property Details</h1>
   
    <div className="flex bg-white mt-6">
    
        <div className="flex mt-8" >
          <div className="w-1/2">
           
            <div className="grid grid-cols-2 gap-3">
              {datas?.images?.slice(0, 4).map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div>
          </div>
          <div className="w-1/2 ml-28 text-2xl" >
            <ul>
              <li className="text-black">Category     : {datas.selectedCategory}</li>
              <li className="text-black">Type     : {datas.selectedType}</li>
              <li className="text-black">Amenities     : {datas.selectedFeature}</li>
              <li className="text-black">
                Address: {datas?.address?.name},{datas?.address?.houseAddress},
                {datas?.address?.city},{datas?.address?.state},
                {datas?.address?.pin}
              </li>
              <li className="text-black">Location   : {datas.selectedLocation}</li>
              <li className="text-black">Basics   :
               <ul className='ml-10'>
                <li> Guests- {datas?.selectedBasics?.Guests} </li>
                <li>  Bedrooms -{datas?.selectedBasics?.Bedrooms}</li>
                <li>  Beds -{datas?.selectedBasics?.Beds}</li>
                <li>  Bathrooms -{datas?.selectedBasics?.Bathrooms}</li>
              </ul> 
              <li className="text-black">Price : {datas.selectedPrice} /-</li>
             
             
              </li>
            </ul>
          </div>
        </div>
/
    </div> */}
    <div className='flex justify-center pt-16'>
      <h1 className="text-3xl text-black">Property Details</h1>
    </div>
    <div className='m-10 mr-0 mb-0 justify-evenly flex'>
    {datas?.images?.slice(0, 4).map((img, index) => (
      <div className='flex-wrap'>

        <img key={index} className='' src={img} alt="" />
      </div>
              ))}
              <div className=''>

            <ul className=''>
              <li className="text-black">Category     : {datas.selectedCategory}</li>
              <li className="text-black">Type     : {datas.selectedType}</li>
              <li className="text-black">Amenities     : {datas.selectedFeature}</li>
              <li className="text-black">
                Address: {datas?.address?.name},{datas?.address?.houseAddress},
                {datas?.address?.city},{datas?.address?.state},
                {datas?.address?.pin}
              </li>
              <li className="text-black">Location   : {datas.selectedLocation}</li>
              <li className="text-black">Basics   :
              <ul className='ml-10'>
                <li> Guests- {datas?.selectedBasics?.Guests} </li>
                <li>  Bedrooms -{datas?.selectedBasics?.Bedrooms}</li>
                <li>  Beds -{datas?.selectedBasics?.Beds}</li>
                <li>  Bathrooms -{datas?.selectedBasics?.Bathrooms}</li>
              </ul>
              <li className="text-black">Price : {datas.selectedPrice} /-</li>
             
             
              </li>
            </ul> 

        </div>
    </div>
  </div>
  )
}

export default PropertyDetail
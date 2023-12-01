import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../api/axios'

const PropertyDetail = () => {
const [datas,setDatas]=useState({})
const [reload,setReload]=useState(false)
const {id}=useParams()
console.log(id);

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

  return (
    

    <div className="bg-white h-screen flex flex-col justify-center items-center">
       <button  className='bg-red-800'>chat</button>
    <h1 className="text-3xl text-black">Property Details</h1>
   
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

    </div>
  </div>
  )
}

export default PropertyDetail
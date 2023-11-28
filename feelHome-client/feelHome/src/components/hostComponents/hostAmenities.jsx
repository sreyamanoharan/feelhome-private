import React,  { useEffect ,useState} from 'react'
import axiosInstance from '../../api/axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedFeature } from '../../store/slice/Host';


const hostAmenities = () => {
      const [feature,setFeature]=useState([])
      const navigate=useNavigate()
      const [selectedFeature,setSelectedFeature]=useState([])
      const [selected, setSelected] = useState([])
      const dispatch=useDispatch()
      

      const manageSelected = (feature) => {
        if(selected.includes(feature)){
          setSelected(selected.filter(item => item!=feature))
        }else{
          setSelected([...selected, feature])
        }
      }

      useEffect(()=>{
         axiosInstance.get('/getFeature').then((res)=>{
          setFeature(res.data.feature)
         }).catch(err=>{
          console.log(err);
         })
      },[])

      const handleSubmit = () => {
        selected.forEach(item => {
          dispatch(addSelectedFeature({selectedFeature:item}))
        })
        navigate('/host/hostPhotos')
      }

      
  return (
    <>
    <div className='bg-white h-screen w-full flex flex-col justify-center items-center'>

    <div className='text-center'>
     
      <h1 className='text-black mt-3 text-3xl'>Which of these best describes your place</h1>
      <div>
      <div className="flex">

      {feature.map((feature, index)=>(
        <div
                  key={feature.id}
                  className={`${selected.includes(feature) && `bg-gray-400`} w-1/3 p-4 border text-center mt-6 ${
                    selectedFeature === feature ? 'selected-feature' : ''
                  }`}
                  onClick={() => { manageSelected(feature); reduxFeature(feature.heading); }} 
                >
                  {selectedFeature=== feature && (
                    <div className="selected-tick">✔</div> 
                  )}
                  <div className="text-3xl text-black">
                    <img src={feature.featureImage} alt={feature.heading} />
                  </div>
                  <div className="text-black">{feature.heading}</div>
                </div>
      ))}
      
 
   
  </div>

    </div>
    </div>
   
    <div className="bg-black w-full mt-16 relative">
    <div className="h-px w-30/100 bg-black"></div>
    <div className="h-px w-70/100 bg-black"></div>
    </div>
  
    <div className='mt-12'>
    <button onClick={handleSubmit} className='bg-black text-white px-4 py-2'>Next</button>
    </div>
    </div>
    </>
  )
}

export default hostAmenities
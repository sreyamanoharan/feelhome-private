import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axiosInstance from '../../api/axios';
import { hostDatas } from '../../../src/store/slice/Host.js';
import { useDispatch, useSelector } from 'react-redux';

const HostType = () => {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(null); // To store selected category
 
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get('/getCategory')
      .then((res) => {
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoryClick = (heading) => {
    console.log("this is check",heading);
    dispatch(hostDatas({selectedCategory:heading}))

  };
  
  const valueA = useSelector(state => state.selectedCategory)
 


  return (
    <>
      <div className="bg-white h-screen w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-black mt-3 text-3xl">
            Which of these best describes your place
          </h1>
           
          <div>
            <div className="flex">
              {category.map((type,index) => (
                <div
                  key={index}
                  className={`w-1/3 p-4 border text-center mt-6 ${
                    selectedCategory === type ? 'selected-category' : ''
                  }`}
                  onClick={() => handleCategoryClick(type.heading)} // Pass the selected category
                >
                   {selectedCategory === type && (
                  <div className="selected-tick">✔</div> // Selected tick animation
                   )}
                  <div className="text-3xl text-black">
                    <img src={type.categoryImage} alt={type.heading} />
                  </div>
                  <div className="text-black">{type.heading}</div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        <div className="bg-black w-full mt-16 relative">
          <div className="h-px w-30/100 bg-black"></div>
          <div className="h-px w-70/100 bg-black"></div>
        </div>
        <div className="mt-12">
          <button className="bg-black text-white px-4 py-2" onClick={()=>navigate("/hostPlace")}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default HostType;

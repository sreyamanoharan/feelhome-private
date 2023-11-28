import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api/axios';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const HostProps = () => {
  const [datas, setDatas] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const userId=useSelector(state=>state.User.userId)

  useEffect(() => {
    axiosInstance.get(`/host/getData/${userId}`)
      .then((res) => {
        setDatas(res.data.hostData);
        console.log(res.data.hostData, 'getHostData');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <div className='h-screen bg-white'>
      <div className='bg-white gap-3 w-full flex'>
        {datas.map((data, index) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={data._id}>
            {/* <figure className="px-10 pt-10">
              <img src={data.images} alt={data.selectedCategory} className="rounded-xl" />
            </figure> */}
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                <img src={data?.images[0]} alt="" />
                </h2>
              <p>{data?.selectedCategory}</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={()=>navigate(`/host/propDetails/${data._id}`)} >Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HostProps;

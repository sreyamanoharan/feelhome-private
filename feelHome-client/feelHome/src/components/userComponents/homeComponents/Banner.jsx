import React, { useEffect ,useState} from 'react'
import beach from '../../../../src/images/beach.jpeg'
import treehouse from '../../../../src/images/treehouse.png'
import { Carousel, Typography} from "@material-tailwind/react";
import axiosInstance from '../../../api/axios';
 
const Banner =()=> {

  const[banners,setBanners]= useState([])

  useEffect(()=>{
    axiosInstance.get('/banners').then(res=>{
      setBanners(res.data.banners)
      console.log(res.data.banners)
    }).catch(err=>{
      console.log(err);
  })
  },[])

  return (
    <div className='flex'>
    {banners.map(banner=>(
    <Carousel key={banner._id} className="rounded-xl">
   
      <div className="relative h-full w-full">
        <img
          src={banner.bannerImage}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
             {banner.mainHeading}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             {banner.description}
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
    ))}
    </div>
  );
}

export default Banner
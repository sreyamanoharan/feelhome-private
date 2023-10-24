import axios from 'axios'
import { Store } from '../store/Store';
import { useState } from 'react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
  config=>{

    const userState=Store.getState().User;
    const role=config.url.split('/')

       if(role==='user'){

           config.headers['Authorization']=`Bearer ${useState.token}`
       }

    //    if(role==='admin'){

    //       config.headers['Authorization']=`Bearer ${adminState.token}`

    //    }
       return config

  },
  error=>{
    return Promise.reject(error)
  }
)



export default axiosInstance
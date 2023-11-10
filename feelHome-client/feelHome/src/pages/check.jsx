import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSelectedFeature } from '../store/slice/Host';

const Check = () => {
   
    const hostData = useSelector(state => state.User)
    const dispatch = useDispatch();
    console.log(hostData);
    const checkmyredux=()=>{
        dispatch(addSelectedFeature({selectedFeature:"myfeature"}))
    }
  return (
    <div>......check.............

       <h1 onClick={checkmyredux}>click meeeeeeeeee</h1>
    </div>
  )
}

export default Check


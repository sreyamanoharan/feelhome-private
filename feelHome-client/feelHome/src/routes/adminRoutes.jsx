import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AdminNav from '../components/adminComponents/adminNav'
import Categorylist from '../components/adminComponents/CategoryComponents/categorylist'
import MainFeature from '../components/adminComponents/Features/mainFeature'
import TypeFeature from '../components/adminComponents/Features/typeFeature'
import { useSelector} from 'react-redux'


function adminRoute(){
   
    return(
        <Routes>
            <Route path='/adminNav' element={<AdminNav/>}></Route>
            <Route path='/Categorylist' element={<Categorylist/>}></Route>
            <Route path='/MainFeature' element={<MainFeature/>}></Route>
            <Route path='/TypeFeature' element={<TypeFeature/>}></Route>
        </Routes>
    )
}
export default adminRoute
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Categorylist from '../components/adminComponents/CategoryComponents/categorylist'
import MainFeature from '../components/adminComponents/Features/mainFeature'
import TypeFeature from '../components/adminComponents/Features/typeFeature'
import { useSelector} from 'react-redux'
import AdminNav from '../components/adminComponents/adminNav'
import MainBanner from '../components/adminComponents/BannerComponents/MainBanner'
import AdminHome from '../components/adminComponents/AdminHome'
import AdminLogin from '../components/Login/AdminLogin'
import UserList from '../components/adminComponents/userList'
import AdminProtected from '../components/adminComponents/AdminProtected'
import Propertyverify from '../components/adminComponents/Propertyverify'


function adminRoute(){
   
    return(
        <Routes>
            <Route element={<AdminNav/>}>
            <Route path='/categoryList' element={<AdminProtected><Categorylist/></AdminProtected>}></Route>
            <Route path='/MainFeature' element={<AdminProtected><MainFeature/></AdminProtected>}></Route>
            <Route path='/TypeFeature' element={<AdminProtected><TypeFeature/></AdminProtected>}></Route>
            <Route path='/MainBanner' element={<AdminProtected><MainBanner/></AdminProtected>}/>
            <Route path='/home' element={<AdminHome/>}></Route>
            <Route path='/userList' element={<AdminProtected><UserList/></AdminProtected>}></Route>
            <Route path='/propverify'element={<Propertyverify/>}/></Route>
            <Route path='/adminLogin' element={<AdminLogin/>}></Route>
        </Routes>
    )
}
export default adminRoute
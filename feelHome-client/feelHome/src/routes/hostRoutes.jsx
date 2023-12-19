import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import HostHome from '../pages/HostPages/HostHome'
import HostProps from '../pages/HostPages/hostProps'
import HostPage from '../components/hostComponents/hostPage'
import HostType from '../components/hostComponents/hostType'
// import HostPlace from '../components/hostComponents/hostPlace'
import HostLocation from '../components/hostComponents/hostLocation'
import HostAddress from '../components/hostComponents/hostAddress'
import Test from '../components/hostComponents/Test'
import HostBasics from '../components/hostComponents/hostBasics'
import HostStPlace from '../components/hostComponents/hostStPlace'
import HostAmenities from '../components/hostComponents/hostAmenities'
import HostPhotos from '../components/hostComponents/hostPhotos'
import HostFinish from '../components/hostComponents/hostFinish'
import HostPrice from '../components/hostComponents/hostPrice'
import HostFinal from '../components/hostComponents/hostFinal'
import HostNavbar from '../components/hostComponents/hostNavbar'
import PropDetails from '../pages/HostPages/propDetails'
import UserChat from '../components/userComponents/mainComponents/userChat'
import { useSelector } from 'react-redux'
import ProtectedRoute from '../components/userComponents/ProtectRouter'


function hostRoute(){

    const token=useSelector((state)=>state.User.token)
return (
    <Routes>
        
        <Route path='/hostHome' element={<HostHome/>}/>
        <Route path='/hostProps' element={<ProtectedRoute><HostProps/></ProtectedRoute>}/>
        <Route path='/hostPage' element={<ProtectedRoute><HostPage/></ProtectedRoute>}/>
        <Route path='/hostType' element={<ProtectedRoute><HostType/></ProtectedRoute>}/>
        {/* <Route path='/hostPlace' element={<ProtectedRoute><HostPlace/></ProtectedRoute>}/> */}
        <Route path='/hostLocation' element={<ProtectedRoute><HostLocation/></ProtectedRoute>}/>
        <Route path='/hostAddress' element={<ProtectedRoute><HostAddress/></ProtectedRoute>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/hostBasics' element={<ProtectedRoute><HostBasics/></ProtectedRoute>}/>
        <Route path='/hostStPlace' element={<ProtectedRoute><HostStPlace/></ProtectedRoute>}/>
        <Route path='/hostAmenities' element={<ProtectedRoute><HostAmenities/></ProtectedRoute>}/>
        <Route path='/hostPhotos' element={<ProtectedRoute><HostPhotos/></ProtectedRoute>}/>
        <Route path='/hostFinish' element={<ProtectedRoute><HostFinish/></ProtectedRoute>}/>
        <Route path='/hostPrice' element={<ProtectedRoute><HostPrice/></ProtectedRoute>}/>
        <Route path='/hostFinal' element={<ProtectedRoute><HostFinal/></ProtectedRoute>}/>
        <Route path='/hostNav' element={<HostNavbar/>}/>
        <Route path='/propDetails/:id' element={<ProtectedRoute><PropDetails/></ProtectedRoute>}/>
        <Route path='/chat' element={<ProtectedRoute><UserChat  role={'host'}/></ProtectedRoute>}/>


    </Routes>

)
  

}

export default hostRoute



import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HostHome from '../pages/HostPages/HostHome'
import HostProps from '../pages/HostPages/hostProps'
import HostPage from '../components/hostComponents/hostPage'
import HostType from '../components/hostComponents/hostType'
import HostPlace from '../components/hostComponents/hostPlace'
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

function hostRoute(){
return (
    <Routes>
        
        <Route path='/hostHome' element={<HostHome/>}/>
        <Route path='/hostProps' element={<HostProps/>}/>
        <Route path='/hostPage' element={<HostPage/>}/>
        <Route path='/hostType' element={<HostType/>}/>
        <Route path='/hostPlace' element={<HostPlace/>}/>
        <Route path='/hostLocation' element={<HostLocation/>}/>
        <Route path='/hostAddress' element={<HostAddress/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/hostBasics' element={<HostBasics/>}/>
        <Route path='/hostStPlace' element={<HostStPlace/>}/>
        <Route path='/hostAmenities' element={<HostAmenities/>}/>
        <Route path='/hostPhotos' element={<HostPhotos/>}/>
        <Route path='/hostFinish' element={<HostFinish/>}/>
        <Route path='/hostPrice' element={<HostPrice/>}/>
        <Route path='/hostFinal' element={<HostFinal/>}/>
        <Route path='/hostNav' element={<HostNavbar/>}/>
        <Route path='/propDetails/:id' element={<PropDetails/>}/>
        <Route path='/chat' element={<UserChat  role={'host'}/>}/>


    </Routes>

)
  

}

export default hostRoute



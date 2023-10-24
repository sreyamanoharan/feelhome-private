import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserLogin from './components/Login/UserLogin'
import Register from './components/Register'
import VerifyEmail from './pages/userPages/VerifyEmail'
import Home from './pages/userPages/Home'
import Catpage from './pages/userPages/Catpage'
import MainBanner from './pages/AdminPages/BannerPages/mainBanner'
// import AddBanner from './components/adminComponents/BannerComponents/AddBanner'
import AdminNav from './components/adminComponents/adminNav'
import { useSelector} from 'react-redux'
import UserProfile from './pages/userPages/mainPages/userProfile'
import HostHome from './pages/HostPages/HostHome'
import HostProps from './pages/HostPages/hostProps'
import HostPage from './components/hostComponents/hostPage'
import HostType from './components/hostComponents/hostType'
import HostPlace from './components/hostComponents/hostPlace'
import HostLocation from './components/hostComponents/hostLocation'
import HostAddress from './components/hostComponents/hostAddress'
import Test from './components/hostComponents/Test'
import HostBasics from './components/hostComponents/hostBasics'
import HostStPlace from './components/hostComponents/hostStPlace'
import HostAmenities from './components/hostComponents/hostAmenities'
import HostPhotos from './components/hostComponents/hostPhotos'
import Categorylist from './components/adminComponents/CategoryComponents/categorylist'
import AdminLogin from './components/Login/AdminLogin'


function App() {

const token=useSelector((state)=>state.User.token)

console.log(token)
  return (
    
    <Router>
    <Routes>
    <Route path='/userlogin' element={<UserLogin/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/verifyMail/:userId' element={<VerifyEmail/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Catpage' element={<Catpage/>}/>
    <Route path='/' element={<MainBanner/>}/>
    <Route path='/admin/addBanner' element={<MainBanner/>}/>
    <Route path='/adnav' element={<AdminNav/>}/>
    <Route path='/userProfile' element={<UserProfile/>}/>
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
    <Route path='/admin/categorylist' element={<Categorylist/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/> 

    </Routes>
    </Router>
    
  )
}

export default App

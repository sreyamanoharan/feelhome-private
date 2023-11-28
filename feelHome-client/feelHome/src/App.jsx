import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserLogin from './components/Login/UserLogin'
import Register from './components/Register'
import VerifyEmail from './pages/userPages/VerifyEmail'
import Home from './pages/userPages/Home'
import Catpage from './pages/userPages/Catpage'
import { useSelector} from 'react-redux'
import UserProfile from './pages/userPages/mainPages/userProfile'
import AdminLogin from './components/Login/AdminLogin'
import Check from './pages/check'
import PropDetails from './components/hostComponents/propDetails'
import HomeData from './components/userComponents/homeComponents/homeData'
import PropertyDetails from './pages/userPages/mainPages/propertyDetails'
import PaymentDetails from './components/userComponents/mainComponents/paymentDetails'
import MainBanner from './components/adminComponents/BannerComponents/MainBanner'
import AdminRoute from './routes/adminRoutes'
import HostRoute from './routes/hostRoutes'
import PaymentFail from './components/userComponents/mainComponents/paymentFail'
import PaymentSuccess from './components/userComponents/mainComponents/paymentSuccess'
import Bookings from './pages/userPages/mainPages/bookings'



function App() {

const token=useSelector((state)=>state.User.token)

console.log(token)
  return (
    
    <Router>
    <Routes>
    <Route path='/userlogin' element={<UserLogin/>}/>

    <Route path='/check' element={<Check/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/verifyMail/:userId' element={<VerifyEmail/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/Catpage' element={<Catpage/>}/>
    <Route path='/' element={<MainBanner/>}/>
    {/* <Route path='/admin/addBanner' element={<MainBanner/>}/>
    <Route path='/adnav' element={<AdminNav/>}/> */}
    <Route path='/userProfile' element={<UserProfile/>}/>
    {/* <Route path='/admin/categorylist' element={<Categorylist/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/> 
    <Route path='/admin/mainFeature' element={<MainFeature/>}/> 
    <Route path='/admin/typeFeature' element={<TypeFeature/>}/>  */}
  
    <Route path='/homeData' element={<HomeData/>}/>
    <Route path='/propertyDetails/:id' element={<PropertyDetails/>}/>
    <Route path='/paymentDetails' element={<PaymentDetails/>}/>
    <Route path="/paymentSuccess/:load" element={<PaymentSuccess/>}/>
    <Route path='/paymentFail' element={<PaymentFail/>}/>
    <Route path='/bookings' element={<Bookings/>}/>


    
    <Route path='/admin/*' element={<AdminRoute/>}/>
    <Route path='/host/*' element={<HostRoute/>}/>

    </Routes>
    </Router>
    
  )
}

export default App

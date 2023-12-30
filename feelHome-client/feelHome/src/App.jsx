import './App.css'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import UserLogin from './components/Login/UserLogin'
import Register from './components/Register'
import VerifyEmail from './pages/userPages/VerifyEmail'
import Home from './pages/userPages/Home'
import Catpage from './pages/userPages/Catpage'
import { useSelector} from 'react-redux'
import UserProfile from './pages/userPages/mainPages/userProfile'
// import AdminLogin from './components/Login/AdminLogin'
import Check from './pages/check'
// import PropDetails from './components/hostComponents/propDetails'
// import HomeData from './components/userComponents/homeComponents/homeData'
import AllProperties from './pages/userPages/mainPages/allProperties'
import PropertyDetails from './pages/userPages/mainPages/propertyDetails'
import PaymentDetails from './components/userComponents/mainComponents/paymentDetails'
// import MainBanner from './components/adminComponents/BannerComponents/MainBanner'
import AdminRoute from './routes/adminRoutes'
import HostRoute from './routes/hostRoutes'
import PaymentFail from './components/userComponents/mainComponents/paymentFail'
import PaymentSuccess from './components/userComponents/mainComponents/paymentSuccess'
import Bookings from './pages/userPages/mainPages/bookings'
import UserChat from './components/userComponents/mainComponents/userChat'
import LatestProperties from './components/userComponents/homeComponents/LatestProperties'
import Chat from './pages/userPages/mainPages/chat'
import ProtectedRoute from './components/userComponents/ProtectRouter'




function App() {


  return (
    
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/userlogin' element={<UserLogin/>}/>

    <Route path='/check' element={<Check/>}/>
  
    <Route path='/verifyMail/:userId' element={<VerifyEmail/>}/>
   
    
    <Route path='/Catpage' element={<Catpage/>}/>
    
    {/* <Route path='/admin/addBanner' element={<MainBanner/>}/>
    <Route path='/adnav' element={<AdminNav/>}/> */}
    {/* <Route path='/userProfile/:userId' element={<UserProfile/>}/> */}
    <Route path='/userProfile' element={<ProtectedRoute><UserProfile/></ProtectedRoute>}></Route>
    {/* <Route path="/userProfile" element={<ProtectedRoute element={<UserProfile />} />} /> */}
    {/* <Route path='/admin/categorylist' element={<Categorylist/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/> 
    <Route path='/admin/mainFeature' element={<MainFeature/>}/> 
    <Route path='/admin/typeFeature' element={<TypeFeature/>}/>  */}
  
    <Route path='/allProperties' element={ <ProtectedRoute><AllProperties/></ProtectedRoute>}/>
    <Route path='/propertyDetails/:id' element={ <ProtectedRoute><PropertyDetails/></ProtectedRoute>}/>
    <Route path='/paymentDetails' element={<ProtectedRoute><PaymentDetails/></ProtectedRoute>}/>
    <Route path="/paymentSuccess/:load" element={<ProtectedRoute><PaymentSuccess/></ProtectedRoute>}/>
    <Route path='/paymentFail' element={<ProtectedRoute><PaymentFail/></ProtectedRoute>}/>
    <Route path='/bookings' element={<ProtectedRoute><Bookings/></ProtectedRoute>}/>
    {/* <Route path='/userChat' element={<ProtectedRoute><Chat role={'user'}/></ProtectedRoute>}/> */}
   
   
  
   

    
    <Route path='/admin/*' element={<AdminRoute/>}/>
    <Route path='/host/*' element={<HostRoute/>}/>

    </Routes>
    </Router>
    
  )
}

export default App

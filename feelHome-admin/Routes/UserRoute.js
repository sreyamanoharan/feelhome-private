import express, { Router } from "express";
const userRouter = express.Router();
import {ClientRegister} from "../Controller/UserController/UserController.js";
import {verifyMail}  from "../Controller/UserController/UserController.js";
import {login} from '../Controller/UserController/UserController.js'
// import { verifyUserToken } from "../middlewares/auth.js";
import {resendMail} from '../Controller/UserController/UserController.js'
import { getBanner } from "../Controller/UserController/BannerController.js";
import { getCategory } from "../Controller/UserController/CategoryController.js";
import { getFeature } from "../Controller/UserController/FeatureController.js";
import { getType } from "../Controller/UserController/TypeController.js";
import { getData, getDetails,latestProperties } from "../Controller/UserController/DataController.js";
import { createCheckoutSession ,paymentSuccess,booking, cancelBooking, getBookingNum, latestBookings} from "../Controller/UserController/BookingController.js";
// import { getPage } from "../Controller/PaginationController.js";
import { loadProfile } from "../Controller/UserController/UserController.js";
import { editProfile } from "../Controller/UserController/UserController.js";
import {verifyUserToken} from '../middlewares/auth.js';
import { users } from "../Controller/UserController/UserController.js";
import { getUserNum,latestUsers } from '../Controller/UserController/UserController.js'
import {googleLogin} from '../Controller/UserController/UserController.js' 
import { forgotPassword } from "../Controller/UserController/UserController.js";
import {restPassword} from '../Controller/UserController/UserController.js'


userRouter.post('/register',ClientRegister)
userRouter.get('/verifyMail/:userId',verifyMail)
userRouter.post('/userLogin',login)
userRouter.post('/resendVerificationEmail',resendMail)
userRouter.post('/googleLogin',googleLogin)
userRouter.post('/forgotPassword',forgotPassword)
userRouter.post('resetPassword',restPassword)
userRouter.get('/banners',getBanner)
userRouter.get('/getCategory',getCategory)
userRouter.get('/getFeature',getFeature)
userRouter.get('/getType',getType)
userRouter.get('/getData',verifyUserToken,getData)
userRouter.get('/getDetails/:id',getDetails)
userRouter.post('/create-checkout-session',createCheckoutSession)
userRouter.get('/paymentSuccess',paymentSuccess)
userRouter.get('/paymentFail');
userRouter.get('/booking/:userId',booking)
userRouter.post('/cancel-booking/:bookingId',cancelBooking);
userRouter.get('/userProfile',verifyUserToken,loadProfile);
userRouter.patch('/editProfile',verifyUserToken, editProfile);
userRouter.get('/latestProperties',latestProperties)
userRouter.get('/getUser/:userId',users)
userRouter.get('/userNum',getUserNum)
userRouter.get('/newUsers',latestUsers)
userRouter.get('/bookingNum',getBookingNum)
userRouter.get('/newBooking',latestBookings)
userRouter.get('/latestUsers',latestUsers)




export default userRouter;

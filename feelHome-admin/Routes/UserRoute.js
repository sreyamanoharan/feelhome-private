import express, { Router } from "express";
const userRouter = express.Router();
import {ClientRegister} from "../Controller/UserController/UserController.js";
import {verifyMail}  from "../Controller/UserController/UserController.js";
import {login} from '../Controller/UserController/UserController.js'
import { verifyUserToken } from "../middlewares/auth.js";
import {resendMail} from '../Controller/UserController/UserController.js'
import { getBanner } from "../Controller/UserController/BannerController.js";
import { getCategory } from "../Controller/UserController/CategoryController.js";
import { getFeature } from "../Controller/UserController/FeatureController.js";
import { getType } from "../Controller/UserController/TypeController.js";
import { getData, getDetails } from "../Controller/UserController/DataController.js";
import { createCheckoutSession ,paymentSuccess,booking} from "../Controller/UserController/BookingController.js";



userRouter.post('/register',ClientRegister)
userRouter.get('/verifyMail/:userId',verifyMail)
userRouter.post('/userLogin',login)
userRouter.post('/resendVerificationEmail',resendMail)
userRouter.get('/banners',getBanner)
userRouter.get('/getCategory',getCategory)
userRouter.get('/getFeature',getFeature)
userRouter.get('/getType',getType)
userRouter.get('/getData',getData)
userRouter.get('/getDetails/:id',getDetails)
userRouter.post('/create-checkout-session',createCheckoutSession)
userRouter.get('/paymentSuccess',paymentSuccess)
userRouter.get('/paymentFail');
userRouter.get('/booking/:userId',booking)



export default userRouter;

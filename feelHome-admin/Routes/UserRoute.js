import express, { Router } from "express";
const userRouter = express.Router();
import {ClientRegister} from "../Controller/UserController/UserController.js";
import {verifyMail}  from "../Controller/UserController/UserController.js";
import {login} from '../Controller/UserController/UserController.js'
import { verifyUserToken } from "../middlewares/auth.js";
import {resendMail} from '../Controller/UserController/UserController.js'
import { getBanner } from "../Controller/UserController/BannerController.js";
import { getCategory } from "../Controller/UserController/CategoryController.js";


userRouter.post('/register',ClientRegister);
userRouter.get('/verifyMail/:userId',verifyMail)
userRouter.post('/userLogin',login)
userRouter.post('/resendVerificationEmail',resendMail)
userRouter.get('/banners',getBanner)
userRouter.get('/getCategory',getCategory)


export default userRouter;

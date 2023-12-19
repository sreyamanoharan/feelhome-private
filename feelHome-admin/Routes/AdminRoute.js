import express , {Router} from "express"
import { adminlogin } from "../Controller/AdminController/AdminController.js";
const adminRouter = express.Router()
import {addBanner,getBanner,disableBanner} from "./../Controller/AdminController/BannerController.js";
import {addCategory ,getCategory} from './../Controller/AdminController/CategoryManagement.js'
import { addFeature, getFeature} from "../Controller/AdminController/FeatureManagement.js";
import { addType } from "../Controller/AdminController/TypeController.js";
import { getUser,userStatus } from "../Controller/AdminController/UserController.js";






adminRouter.post('/adminlogin',adminlogin)
adminRouter.post('/addBanner',addBanner)
adminRouter.route('/banner').get(getBanner).post(addBanner).patch(disableBanner)
adminRouter.get('/getBanner',getBanner)
adminRouter.patch('/disableBanner/:id',disableBanner)
adminRouter.post('/postCategory',addCategory)
adminRouter.get('/getCategory',getCategory)
adminRouter.post('/postFeature',addFeature)
adminRouter.get('/getFeature',getFeature)
adminRouter.post('/addType',addType)
adminRouter.get('/getUser',getUser)
adminRouter.patch('/userStatus', userStatus);
// adminRouter.post('/postBanner',BannerController.postBanner)


export default adminRouter;
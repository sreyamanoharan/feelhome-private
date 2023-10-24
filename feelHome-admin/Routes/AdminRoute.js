import express , {Router} from "express"
import { adminlogin } from "../Controller/AdminController/AdminController.js";
const adminRouter = express.Router()
import {addBanner,getBanner,disableBanner} from "./../Controller/AdminController/BannerController.js";
import {addCategory ,getCategory} from './../Controller/AdminController/CategoryManagement.js'

adminRouter.post('/adminlogin',adminlogin)
adminRouter.post('/addBanner',addBanner)
adminRouter.route('/banner').get(getBanner).post(addBanner).patch(disableBanner)
adminRouter.get('/getBanner',getBanner)
adminRouter.patch('/disableBanner/:id',disableBanner)
adminRouter.post('/postCategory',addCategory)
adminRouter.get('/getCategory',getCategory)
// adminRouter.post('/postBanner',BannerController.postBanner)


export default adminRouter;
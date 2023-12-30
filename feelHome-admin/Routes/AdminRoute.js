import express , {Router} from "express"
import { adminRevenue, adminlogin, allCategories, getGraphCategory } from "../Controller/AdminController/AdminController.js";
const adminRouter = express.Router()
import {addBanner,getBanner,disableBanner} from "./../Controller/AdminController/BannerController.js";
import {addCategory ,getCategory} from './../Controller/AdminController/CategoryManagement.js'
import { addFeature, getFeature} from "../Controller/AdminController/FeatureManagement.js";
import { addType } from "../Controller/AdminController/TypeController.js";
import { getUser,getUserNum,latestUsers,latestUsersnum,userStatus } from "../Controller/AdminController/UserController.js";
import { graphData } from "../Controller/AdminController/AdminController.js";
import { getBookingNum, latestBookings } from "../Controller/UserController/BookingController.js";





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
adminRouter.get('/adminRevenue',adminRevenue)
adminRouter.get('/graphData',graphData)
adminRouter.get('/allcat',allCategories)
adminRouter.get('/graphCategory',getGraphCategory)
adminRouter.get('/latestUsers',latestUsers)
adminRouter.get('/userNum',getUserNum)
adminRouter.get('/newUsers',latestUsersnum)
adminRouter.get('/bookingNum',getBookingNum)
adminRouter.get('/newBooking',latestBookings)

// adminRouter.post('/postBanner',BannerController.postBanner)


export default adminRouter;
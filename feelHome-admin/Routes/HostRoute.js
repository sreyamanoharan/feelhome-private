import express ,{Router} from "express"
const hostRouter = express.Router()
import { postData } from "../Controller/HostController/HostController.js";

hostRouter.post('/postData',postData)



export default hostRouter;


















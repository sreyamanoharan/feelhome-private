import express ,{Router} from "express"
const hostRouter = express.Router()
import { addPhoto } from "../Controller/HostController/PhotoController.js";

hostRouter.post('/addPhoto',addPhoto)



export default hostRouter;


















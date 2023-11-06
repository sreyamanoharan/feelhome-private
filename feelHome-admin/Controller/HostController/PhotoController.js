import PhotoSchema from "../../Models/PhotoModel.js";
import hostRoute from "../../Routes/HostRoute.js";

export const addPhoto = async (req,res)=>{
    try {
        const {image}=req.body
        console.log(req.body);
        const photo= new PhotoSchema({
            image
        })
        let photos=await photo.save()
        if(photos) res.status(200).json({photo})
        else res.status(500).json({error:'internal server error'})
    } catch (error) {
        console.log(error);
    }
}
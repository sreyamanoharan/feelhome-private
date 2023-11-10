import HostSchema from "../../Models/HostModel.js";

export const postData = async (req,res)=>{
    try {
        const {selectedCategory,selectedType,selectedFeature,address,selectedLocation,images,selectedBasics}=req.body
        console.log(req.body);
        const photo= new HostSchema({
            selectedCategory,
            selectedType,
            selectedFeature,
            address,
            selectedLocation,
            images,
            selectedBasics
        })
        let photos=await photo.save()
        if(photos) res.status(200).json({photo})
        else res.status(500).json({error:'internal server error'})
    } catch (error) {
        console.log(error);
    }
}
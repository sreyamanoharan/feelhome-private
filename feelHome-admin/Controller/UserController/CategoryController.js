import CategorySchema from '../../Models/CategoryModel.js'


export const getCategory=async(req,res)=>{
    try {

        const category=await CategorySchema.find()
        console.log(category);
        res.status(200).json({category})
    } catch (error) {
        console.log(error);
    }
}
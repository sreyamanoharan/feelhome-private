import CategorySchema from '../../Models/CategoryModel.js'


export const getCategory=async(req,res)=>{
    try {
        console.log('hereeeeeeeeeeee cattttt');
        const category=await CategorySchema.find()
        console.log(category,'asdfghjkwertyuioasdfghj');
        res.status(200).json({category})
    } catch (error) {
        console.log(error);
    }
}
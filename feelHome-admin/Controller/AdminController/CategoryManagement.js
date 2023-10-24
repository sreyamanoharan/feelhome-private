import CategorySchema from './../../Models/CategoryModel.js'
import adminRoute from '../../Routes/AdminRoute.js'
import mongoose from 'mongoose'


export const addCategory=async (req,res)=>{
    try {
        const {heading,categoryImage}=req.body
        console.log(req.body);
        const category=new CategorySchema({
            heading,
            categoryImage
        })
        let categories= await category.save()
        if(categories) res.status(200).json({category})
        else res.status(500).json({error:'internal server error'})
    } catch (error) {
        console.log(error);
    }
}
export const getCategory=async(req,res)=>{
    try {
        console.log('come get category');
        const category=await CategorySchema.find()
        console.log(category,'geetttttcategoryyyyy....');
        res.status(200).json({category})
    } catch (error) {
        res.status(200).json({errmsg:'server down'})
    }
}
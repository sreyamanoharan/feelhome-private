import userSchema from '../../Models/UserModel.js'

export const getUser=async(req,res)=>{
    try {
        const user=await userSchema.find()
        res.status(200).json({user})
    } catch (error) {
        console.log(error);
    }
}


export const userStatus = async (req,res)=>{
    try{
        const {userId,blocked} = req.body
        console.log(userId,);
        if(blocked){
            await userSchema.updateOne({_id:userId},{$set:{isBlocked:false}})
            return res.status(200).json({message:'Selected user Un-Blocked',isblocked:false})
        }else{
            await userSchema.updateOne({_id:userId},{$set:{isBlocked:true}})
            return res.status(200).json({message:'Selected user blocked',isblocked:true})
        }
    }catch (err){
        return res.status(500).json({errmsg:'Server error'})
    }
}
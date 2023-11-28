import hostSchema from '../../Models/HostModel.js'


export const getData=async(req,res)=>{
    try {
        const hostData=await hostSchema.find()
        res.status(200).json({hostData})
    } catch (error) {
        console.log(error);
    }
}


export const getDetails=async(req,res)=>{
    try {
      const id=req.params.id
      console.log(id);
      const details= await hostSchema.findById(id)
      console.log(details,'log detailsssssss');
      res.status(200).json({details})
    } catch (error) {
      console.log(error);
    }
  }







import BannerCollection from './../../Models/BannerModel.js'
import adminRoute from './../../Routes/AdminRoute.js'
import mongoose from 'mongoose'


export const addBanner= async (req,res)=>{
  try {
    const {mainHeading,description,bannerImage}=req.body
    console.log(mainHeading,description,bannerImage,"aaaaaaaaaaaaaaaaaaaaa");
    console.log(req.body);
    const banner = new BannerCollection( {
        mainHeading,
        description,
        bannerImage,     
    })
    let banners=await banner.save()
    console.log("ggggggggggggggggggggggggggggggg");
    if(banners)res.status(200).json({banner})
    else res.status(500).json({error:'Internal Server Error'})
  } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal Server Error'})
  }
     
}

export const getBanner=async(req,res)=>{
    try {
        console.log('getBanner.......');
        const bannerData=await BannerCollection.find()
        console.log(bannerData,'asdfghjksdfghjkl');
        res.status(200).json({bannerData})

    } catch (error) {
        res.status(200).json({errmsg:'server down'})
        console.log('baneer error',error);
    }
}


export const disableBanner=async(req,res)=>{
    try {
        console.log('disable bannerrrrrrr.......');
        const {id}=req.query
        let disable
        const objectId = new mongoose.Types.ObjectId(id);
        console.log(id,'asdfghjksdfghj',objectId);
        let status=await BannerCollection.findOne({_id:objectId})
        console.log(status);
        if(status.bannerStatus==true){
            disable =false
            status.bannerStatus= false
        }else{
            disable =true
            status.bannerStatus= true
        }
        const update = await status.save()
        if(update) res.status(200).json({disable})
        else res.status(502).json({errmsg:'somthing went wrong'})
    } catch (error) {
        console.log(error)
        
    }
}




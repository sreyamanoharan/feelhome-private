import mongoose from 'mongoose';

const PhotoSchema=new mongoose.Schema({
    image:{
        type:String
    }
})

const Photo=mongoose.model('Photo',PhotoSchema)

export default Photo
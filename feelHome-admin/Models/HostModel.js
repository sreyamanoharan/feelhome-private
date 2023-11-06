import mongoose from 'mongoose'

const HostSchema= new mongoose.SchemaType({
      category:{
         type:String
    },
      type:{
        type:String
    },
      feature:{
        type:Array
    },
      address:{
        type:Array
    },
      location:{
        type:Array
    },
      image:{
        type:Array
    },
      basics:{
        type:Array
    }
})


const Host= mongoose.model('host',HostSchema)

export default Host
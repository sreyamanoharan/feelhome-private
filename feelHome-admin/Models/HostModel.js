import mongoose from 'mongoose'

const HostSchema= new mongoose.SchemaType({
  selectedCategory:{
         type:String
    },
    selectedType:{
        type:String
    },
    selectedFeature:{
        type:Array
    },
      address:{
        type:Object
    },
    selectedLocation:{
        type:Array
    },
    images:{
        type:Array
    },
    selectedBasics:{
        type:Object
    }
})


const Host= mongoose.model('host',HostSchema)

export default Host
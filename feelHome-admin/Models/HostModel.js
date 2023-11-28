import mongoose from 'mongoose';

const HostSchema = new mongoose.Schema({
  selectedCategory: {
    type: String,
  },
  selectedType: {
    type: String,
  },
  selectedFeature: {
    type: [String], 
  },
  address: {
    type: Object,
  },
  selectedLocation: {
    type: [String], 
  },
  selectedPrice:{
    type:Number
  },
  images: {
    type: [String], 
  },
  selectedBasics: {
    type: Object,
  },
  hostId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  },
  isBooked:{
    type:Boolean,
    default:false
  },
});

const Host = mongoose.model('Host', HostSchema);

export default Host;

import mongoose from 'mongoose';

const HostSchema = new mongoose.Schema({
  selectedCategory: {
    type: String,
  },
  selectedType: {
    type: String,
  },
  selectedFeature: {
    type: [String], // Assuming it's an array of strings
  },
  address: {
    type: Object,
  },
  selectedLocation: {
    type: [String], // Assuming it's an array of strings
  },
  images: {
    type: [String], // Assuming it's an array of strings (file paths or URLs)
  },
  selectedBasics: {
    type: Object,
  },
});

const Host = mongoose.model('Host', HostSchema);

export default Host;

import HostSchema from '../../Models/HostModel.js';
import { ObjectId } from 'mongodb';



export const postData = async (req, res) => {
  try {
    const {
      selectedCategory,
      selectedType,
      selectedFeature,
      address,
      selectedLocation,
      selectedPrice,
      images,
      selectedBasics,
    } = req.body.hostData;

    const hostId = req.body.userEmail;
console.log(hostId,'mmmmmmm')
    

    const hostData = new HostSchema({
      selectedCategory,
      selectedType,
      selectedFeature,
      address,
      selectedLocation,
      selectedPrice,
      images,
      selectedBasics,
      hostId: hostId
    });

    let hostDatas = await hostData.save();
    if (hostDatas) res.status(200).json({ hostData: hostDatas });
    else res.status(500).json({ error: 'Internal server error' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



export const getData = async (req, res) => {
  try {

    const id = req.params.userId
    console.log(id, '======asdfghj========');
    const hostData = await HostSchema.find({ hostId:id })
    console.log(hostData);
    res.status(200).json({ hostData })
  } catch (error) {

  }
}

export const getDetails = async (req, res) => {
  try {
    const id = req.params.id
    const details = await HostSchema.findById(id)
    res.status(200).json({ details })
  } catch (error) {

  }
}

import HostSchema from '../../Models/HostModel.js';

export const postData = async (req, res) => {
  try {
  
    const {
      selectedCategory,
      selectedType,
      selectedFeature,
      address,
      selectedLocation,
      images,
      selectedBasics,
    } = req.body.hostData;

    console.log(req.body.hostData);

    const hostData = new HostSchema({
      selectedCategory,
      selectedType,
      selectedFeature,
      address,
      selectedLocation,
      images,
      selectedBasics,
    });

    let hostDatas = await hostData.save();
    if (hostDatas) res.status(200).json({ hostData: hostDatas });
    else res.status(500).json({ error: 'internal server error' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'internal server error' });
  }
};
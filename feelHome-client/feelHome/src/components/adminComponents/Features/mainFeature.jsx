import React, { useEffect, useState } from 'react'
import axios from 'axios';
import axiosInstance from '../../../api/axios';
import { toast } from 'react-hot-toast';

const mainFeature = () => {
    const [selectedFile,setSelectedFile]=useState(null)
    const [feature,setFeature]=useState([])
    const [heading,setHeading]=useState('')
    const [loading,setLoading]=useState('')
    const [modalOpen,setModalOpen]=useState(false)
    const [reload,setReload]=useState(false)
    const [message,setMessage]=useState('')

 
    const uploadImagesToCloudinary = async (files) => {
        const imageUrl = [];
        
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'feelhomeimage');
          
          try {
            console.log('kkkkkkk ');
            const result = await axios.post(
              'https://api.cloudinary.com/v1_1/ds0dvm4ol/image/upload?upload_preset=feelHome',
              formData
              );
              console.log('jjjjj');
              console.log(result.data.secure_url);
            imageUrl.push(result.data.secure_url);
          } catch (error) {
            // Handle error here if needed
            console.error('Error uploading image:', error);
          }
        }
    
        return imageUrl;
      };

      
  const handleSubmit = async (e) => {
    e.preventDefault();
      
    setReload(!reload)
    setLoading('addingFeature')

    try {
      const uploadedImageUrls = await uploadImagesToCloudinary([selectedFile]);

      const formData = new FormData();
      formData.append('heading', heading);
      formData.append('featureImage', uploadedImageUrls[0]);
      const inputObject=Object.fromEntries(formData)
      const response = await axiosInstance.post('/admin/postFeature',inputObject);
      if(response.data.feature){
        setFeature([response.data.feature,
          ...feature
        ]);
        toast.success('feature added successfully!')
      }
      setModalOpen(false)


      setHeading('');
      setMessage('Error adding banner. Please try again.');
      console.log(error);
      setSelectedFile(null);
    } catch (error) {
      setMessage('Error adding banner. Please try again.');
      console.log(error);
    }
  };

  useEffect(()=>{
    axiosInstance.get('/admin/getFeature').then((res)=>{
        setFeature(res.data.feature)
    })
  },[]) 

    
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <>
    <div style={{ background: 'white' }}>
    <div style={{ textAlign: 'center' }}>
      <a
        style={{
          color: 'black',
          cursor: 'pointer',
          fontSize: '24px',
        }}
      >
       Feature Management
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    <button className="btn btn-active btn-accent" onClick={() => setModalOpen(true)} style={{ marginRight: '10px' }}>
  Add New Feature
</button>

    </div>
  
    <div>
      <table className="w-full mt-16 border border-red-500">
        <thead>
          <tr>
            <th className="px-4 py-2 text-black">Image</th>
            <th className="px-4 py-2 text-black">FeatureHeading</th>
            <th className="px-4 py-2 text-black">Options</th>
          </tr>
        </thead>
        <tbody>
        {feature.map((data,index) => (
          <tr key={data._id}>
          <td className="px-4 py-2 text-center">
                <img src={data.featureImage} alt=""  width="100px" className="mx-auto"/>
              </td>
              <td className="px-4 py-2 text-center text-black">{data.heading}</td>
              <td className="px-4 py-2 text-center text-black">
              {data.featureStatus === true ? (
                <a onClick= {handleSubmit} className="btn btn-secondary">
                  Disable
                </a>
              ) : (
                <a onClick='' className="btn btn-primary">
                  Enable
                </a>
              )}
            </td>
               
            </tr>
        ))}
        </tbody>
      </table>
    </div>
    {modalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
        <div className="bg-white text-black font-semibold p-8 rounded-lg shadow-md text-center">
          <h1 className="text-xl font-semibold mb-4">Add New Feature</h1>
          {message && <p>{message}</p>}
          <form action="submit" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="featureImage" className="block">
              Feature Image:
              </label>
              <input
                type="file"
                accept="image/*"
                id="featureImage"
                onChange={handleFileChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="featureHeading" className="block">
                heading:
              </label>
              <input
                type="text"
                id="featureHeading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="flex -justify-center space-x-4 items-center">
              <button className="bg-gray-800 btn text-white" type="submit">
                {loading !== 'addingFeature' ? (
                  'Add New Feature'
                ) : (
                  <p className="w-5 h-5 rounded-full border-4 border-t-transparent border-white animate-spin" />
                )}
              </button>
              <button
                className="btn btn-secondary bg-red-500 text-white hover:bg-red-600"
                onClick={() => {
                  setModalOpen(false);
                  // Reset the categoryImage state
                  // Reset the categoryHeading state
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
    </>
  )
}

export default mainFeature
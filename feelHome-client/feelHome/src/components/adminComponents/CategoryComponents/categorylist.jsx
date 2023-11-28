import React, { useEffect, useState } from 'react'
import axios from 'axios';
import axiosInstance from '../../../api/axios';
import { toast } from 'react-hot-toast';

const categorylist = () => {

    const [selectedFile,setSelectedFile]=useState(null)
    const [category,setCategory]=useState([])
    const [heading,setHeading]=useState('')
    const [loading,setLoading]=useState('')
    const [modalOpen,setModalOpen]=useState(false)
    const [reload,setReload]=useState(false)
    const [message,setMessage]=useState('')

    const handleModalOpen=()=>{
      setModalOpen(true)
    }

   
    const uploadImagesToCloudinary = async (files) => {
      console.log("here");
        const imageUrl = [];
        
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'feelhomeimage');
          
          try {
            console.log('categoryyyyyyyyyyyy ');
            const result = await axios.post(
              'https://api.cloudinary.com/v1_1/ds0dvm4ol/image/upload?upload_preset=feelHome',
              formData
              );
              console.log('category22222222');
              console.log(result.data.secure_url);
            imageUrl.push(result.data.secure_url);
          } catch (error) {
           
            console.error('Error uploading image:', error);
          }
        }
    
        return imageUrl;
      };
  
 const categorySubmit= async(id)=>{
         try {
            
         } catch (error) {
            
         }
 }


 const handleSubmit=async (e)=>{

    e.preventDefault()

    setReload(!reload)
    setLoading('addingCategory')

    try {
        const uploadedImageUrls = await uploadImagesToCloudinary([selectedFile]);
  
        const formData = new FormData();
        formData.append('heading', heading);
        formData.append('categoryImage', uploadedImageUrls[0]);
        const inputObject=Object.fromEntries(formData)
        console.log(inputObject);
        const response = await axiosInstance.post('/admin/postCategory',inputObject);
        if(response.data.category){
          setCategory([response.data.category,
            ...category
          ]);
          toast.success('category added successfully!')
        }
        setModalOpen(false)
  
  
        setHeading('');
        setLoading('')
       
        setSelectedFile('');
      } catch (error) {
        setMessage('Error adding banner. Please try again.');
        console.log(error);
      }
    };


    useEffect(()=>{
        axiosInstance.get('/admin/getCategory').then((res)=>{
            setCategory(res.data.category)
            console.log(res.data.category);
        }).catch((error)=>{
            console.log('error',error);
        })
    },[reload])

    
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
        Category Management
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    <button className="btn btn-active btn-accent" onClick={handleModalOpen} style={{ marginRight: '10px' }}>
  Add New Category
</button>

    </div>
  
    <div>
      <table className="w-full mt-16 border border-red-500">
        <thead>
          <tr>
            <th className="px-4 py-2 text-black">Image</th>
            <th className="px-4 py-2 text-black">Category Heading</th>
            <th className="px-4 py-2 text-black">Options</th>
          </tr>
        </thead>
        <tbody>
        {category.map((data,index) => (
          <tr key={data._id}> 
          <td className="px-4 py-2 text-center">
                <img src={data?.categoryImage?data?.categoryImage:''} alt=""  width="100px" className="mx-auto"/>
              </td>
              <td className="px-4 py-2 text-center text-black">{data.heading}</td>
              <td className="px-4 py-2 text-center text-black">
              {data.categoryStatus === true ? (
                <a onClick={() => {}}  className="btn btn-secondary">
                  Disable
                </a>
              ) : (
                <a onClick={() => {}} className="btn btn-primary">
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
          <h1 className="text-xl font-semibold mb-4">Add New Category</h1>
          {message && <p>{message}</p>}
          <form action="submit" method="POST" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="categoryImage" className="block">
                Category Image:
              </label>
              <input
                type="file"
                accept="image/*"
                id="categoryImage"
                onChange={handleFileChange}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoryHeading" className="block">
                heading:
              </label>
              <input
                type="text"
                id="categoryHeading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
                className="border p-2 w-full"
              />
            </div>
            <div className='flex - justify-center space-x-4 items-center'>
                  <button
                    className=" bg-gray-800 btn text-white "
                    type="submit"
                  >
                  { loading !== 'addingCategory'?
                  'Add New Category':<><p  className='w-5 h-5 rounded-full border-4 border-t-transparent border-white animate-spin'/>adding</>}
                  </button>
                  <button
                    className="btn btn-secondary bg-red-500 text-white hover:bg-red-600"
                    onClick={()=>setModalOpen(false)}
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

export default categorylist
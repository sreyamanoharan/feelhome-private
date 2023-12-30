import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../api/axios';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast'
import Pagination from './pagination';

const ITEMS_PER_PAGE = 2

const homeData = () => {
  const { token } = useSelector((state) => state.User)
  const [minDate, setMinDate] = useState(new Date().toISOString().split('T')[0])
  const [datas, setDatas] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [propertyId, setPropertyId] = useState('')
  const [hostId, setHostId] = useState('')
  const userId = useSelector(state => state.User.userId)
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
 

  const filteredDatas = datas.filter((data) =>
  data?.selectedCategory?.includes(categoryFilter) &&  data?.selectedCategory.toLowerCase().includes(searchTerm.toLowerCase())

);


 const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigate = useNavigate();

  const handleBooking = async (propertyId) => {
    console.log('hereee');
  
    if (new Date() >= new Date(checkInDate) || checkInDate === checkOutDate || new Date() >= new Date(checkOutDate) || !checkInDate || !checkOutDate) {
      console.log('booking.........');
      toast.error("Enter correct dates");
    } else {
      console.log('booking.........');
  
      axiosInstance.post('/create-checkout-session', { userId, propertyId, checkInDate, checkOutDate })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }else{
            toast.success('Booking successful!')
          }
        })
        .catch((err) => {
          console.log(err);
          if (err?.response.data.errMsg) {
            console.log('error');
            toast.error(err.response.data.errMsg);
          }
        });
    }
  };




  useEffect(() => {
    axiosInstance.get('/getData',{
      headers:{
          authorization: `Bearer ${token}`
      }
  }).then((res) => {
      setDatas(res.data.hostData)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    setSearchTerm(''); 
  };
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredDatas.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredDatas.length / ITEMS_PER_PAGE);

 

  return (
    <>
       <Toaster toastOptions={{ duration: 3000 }} />
      <div className='h-screen bg-white'>
        <div className="text-center">
          <h1 className="text-black text-3xl">All Properties</h1>
        </div>
        <div className="mb-4">
        <label htmlFor="categoryFilter">Filter by Category:</label>
        <select
          id="categoryFilter"
          value={categoryFilter}
          onChange={(e) => handleCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {/* Add options for each unique category in your data */}
          {Array.from(new Set(datas.map((data) => data.selectedCategory))).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
        <div className='bg-white gap-3 w-full flex ml-9'>
       
        <div className="bg-white gap-3 w-full flex ml-9">
        {currentItems.map((data, index)  => (
          <div className="card w-96 bg-base-100 shadow-xl mt-5" key={data._id}>
              {/* <figure className="px-10 pt-10">
              <img src={data.images} alt={data.selectedCategory} className="rounded-xl" />
            </figure> */}
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  <img src={data?.images[0]} alt="" />
                </h2>
                <p>{data?.selectedCategory}</p>
                <p>{data?.selectedLocation}</p>
                <p> Rs.{data?.selectedPrice}/day</p>
                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setModalOpen(true)
                      setPropertyId(data._id)
                      setHostId(data.hostId)

                    }

                    }
                    disabled={bookingSuccess}
                  >
                    {bookingSuccess ? 'Booked!' : 'Book Now'}
                  </button>
                  {bookingSuccess && (
                    <p>Booking successful! Check your email for confirmation.</p>
                  )}
                  <button className="btn btn-primary" onClick={() => navigate(`/propertyDetails/${data._id}`)} >View Details</button>
                </div>
                
              </div>
            </div>
          ))}
           </div>
        )
      </div>
       

        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black font-semibold p-8 rounded-lg shadow-md text-center">
              <h1 className="text-xl font-semibold mb-4">Book Now</h1>
              {message && <p>{message}</p>}

              <div className="mb-4">
                <label htmlFor="checkInDate">Check-in Date:</label>
                <input className='text-white'
                  type="date" min={minDate}
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="checkOutDate">Check-out Date:</label>
                <input className='text-white'
                  type="date" min={minDate}
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="numGuests">Number of Guests:</label>
                <input className='text-white'
                  type="number"
                  id="numGuests"
                  value={numGuests}
                  min="1"
                  onChange={(e) => setNumGuests(e.target.value)}
                />
              </div>
              

              <div className='flex - justify-center space-x-4 items-center mt-8' >
                <button
                  onClick={() => handleBooking(propertyId)}
                  className=" bg-gray-800 btn text-white "

                >
                  {loading !== 'Booking' ?
                    'book' : <><p className='w-5 h-5 rounded-full border-4 border-t-transparent border-white animate-spin' />Booking</>}
                </button>
                <button
                  className="btn btn-secondary bg-red-500 text-white hover:bg-red-600"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}
       
      </div>
      <div className='bg-white text-white flex justify-center '>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      </div>
     
    </>
    
  )
}

export default homeData
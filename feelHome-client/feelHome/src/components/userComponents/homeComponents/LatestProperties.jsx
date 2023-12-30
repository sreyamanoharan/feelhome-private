import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../api/axios';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'

const LatestProperties = () => {

  const [latestProperties, setLatestProperties] = useState([]);
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
  const navigate = useNavigate();



  const handleBooking = async (propertyId) => {
    console.log('hereee')
    if (new Date() >= new Date(checkInDate) || checkInDate == checkOutDate || new Date() >= new Date(checkOutDate) || checkInDate == undefined || checkOutDate == undefined) {
      console.log('booking.........')
      toast.error("Enter correct dates")
    } else {
      console.log('booking.........')

      axiosInstance.post('/create-checkout-session', { userId, propertyId, checkInDate, checkOutDate}).then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      }).catch((err) => {
        console.log(err)
        if (err?.response.data.errMsg) {
          console.log('error')
          toast.error(err.response.data.errMsg)
        }
      })
    }
  }

  useEffect(() => {
    const fetchLatestProperties = async () => {
      try {
        const response = await axiosInstance.get('/latestProperties');
        const sortedProperties = response.data.latestProperties.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLatestProperties(sortedProperties);
      } catch (error) {
        console.error('Error fetching latest properties:', error);
      }
    };

    fetchLatestProperties();
  }, []);

  return (
    <>
      <div className='h-screen bg-white'>
        <div className="text-center">
          <h1 className="text-black text-3xl p-5">Latest Properties</h1>
        </div>
        {/* <div className="mb-4">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
        <div className='bg-white gap-3 w-full flex ml-9 p-9'>

          {latestProperties.map((data, index) => (
            <div className="card w-96 bg-base-100 shadow-xl mt-5" key={data._id}>
              {/* <figure className="px-10 pt-10">
              <img src={data.images} alt={data.selectedCategory} className="rounded-xl" />
            </figure> */}
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  <img src={data?.images[0]} alt="" />
                </h2>
                <p>{data?.selectedCategory}</p>
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
    </>
  )
}



export default LatestProperties
import admin from '../../Models/AdminModel.js';
import hostModel from '../../Models/HostModel.js'
import userModel from '../../Models/UserModel.js'
import rentModel from '../../Models/RentModel.js';

const BACKEND_URL = process.env.BACKEND_URL
const FRONTEND_URL = process.env.VITE_FRONTENDURL
import Stripe from 'stripe'
const STRIPE_API_KEY = process.env.STRIPE_API_KEY
const stripe = Stripe(STRIPE_API_KEY);

export const createCheckoutSession = async (req, res) => {
    try {
        console.log("hereee")
        const userId = req.body.userId
        console.log(userId,"userid");
        const checkInDate = req.body.checkInDate
        const checkOutDate = req.body.checkOutDate
        const guests = req.body.guests
        console.log(checkInDate,"checkInDate");
        console.log(checkOutDate,"checkOutDate");
    console.log("kkkkkkk",req.body.propertyId);
        const property = await hostModel.findOne({ _id: req.body.propertyId })
        const diff = new Date(checkOutDate) - new Date(checkInDate)
        const difference = diff / (1000 * 3600 * 24)
        const amount=difference * property.selectedPrice

        const existingBooking = await rentModel.findOne({
            propertyId: property._id,
            $or: [
                {
                    checkInDate: { $lte: checkInDate },
                    checkOutDate: { $gte: checkInDate }
                },
                {
                    checkInDate: { $lte: checkOutDate },
                    checkOutDate: { $gte: checkOutDate }
                }
            ]
        })
        console.log(existingBooking,"existingBooking");
        if (existingBooking) {
         
            res.status(409).json({ errMsg: 'This date is already booked' })
            return;
        }else{
          console.log("sreya");
          console.log("exist");
            const user = await stripe.customers.create({
                metadata: {
                  userId: userId,
                  proprtyId: property._id,
                  checkInDate: checkInDate,
                  toDate: checkOutDate,
                  amount: amount
                }
              })
              
              const session = await stripe.checkout.sessions.create({
                customer: user.id,
                line_items: [
                  {
                    price_data: {
                      currency: 'inr',
                      product_data: {
                        name: property.selectedCategory,
                        metadata: {
                          id:property._id
                        }
                      },
                      unit_amount: amount * 100,
                    },
                    quantity: 1,
                  },
                ],
                mode: 'payment',
                success_url:`${BACKEND_URL}paymentSuccess?userId=${userId}&propertyId=${property._id}&amount=${amount}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`,
                cancel_url: `${BACKEND_URL}paymentFail`,
                
              })
              console.log(session,"kkkkkkkkkk");
              res.send({ url: session.url });
              console.log(session.url+'===')
            }

    } catch (error) {
        res.status(500).json({errMsg:"server erropr"})
        console.log(error);
    }
}

export const paymentSuccess = async (req, res) => {
    try {
      const { propertyId, checkInDate, checkOutDate, amount, userId } = req.query
      const load = true
  
      const Rent = await rentModel.create({
        userId: userId,
        propertyId: propertyId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        Amount: amount,
        bookedAt: new Date()
       
          
      })
      const updt =   await hostModel.updateOne({ _id:propertyId }, { $set: { isBooked: true } })
      const priceHost = Math.floor((amount*90)/100)
      const priceAdmin = Math.floor((amount*10)/100)
      const walletHistoryHost = {date:new Date(),amount:priceHost,from:userId,transactionType:'Credit'}
      const walletHistoryAdmin = {date:new Date(),amount:priceAdmin,from:userId,transactionType:'Credit'}
      const host = await hostModel.findOne({_id:propertyId})
      console.log("vvv",host)
      const updateHost = await userModel.updateOne({_id:host.hostId},
        {$inc:{wallet:priceHost},$push:{walletHistory:walletHistoryHost}})
      
        const updateAdmin = await admin.updateOne({phone:process.env.ADMIN_EMAIL},
        {$inc:{wallet:priceAdmin},$push:{walletHistory:walletHistoryAdmin}})

      return updateHost && updateAdmin && res.redirect(`${FRONTEND_URL}paymentSuccess/${load}`)

    } catch (error) {
      res.status(500).json({ errMsg: 'Server Error' })
      console.log(error);
    }
  }



  export const booking=async (req,res)=>{
       try {
        const userId=req.params.userId
        console.log(userId);
        const data=await rentModel.find({userId:userId}).populate('propertyId').populate('userId')
        console.log(data);
        res.status(200).json({data})
       } catch (error) {
        res.status(200).json({errmsg:'server down'})
        console.log('booking error',error);
       }
  }
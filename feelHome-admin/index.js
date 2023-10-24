import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import userRouter from './Routes/UserRoute.js';
import adminRouter from './Routes/AdminRoute.js';
import hostRouter from './Routes/HostRoute.js';
import jwt from 'jsonwebtoken'

const app = express();
const port = 3000;
const dbUrl = 'mongodb://127.0.0.1:27017/feelHome';

// Middleware
app.use(cors({
  origin: ["http://localhost:4000"],
  methods: ["GET", "POST","PATCH","PUT" ],
  credentials: true,
}));
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/', userRouter);
app.use('/admin', adminRouter);
app.use('/host', hostRouter);


mongoose.connect('mongodb://127.0.0.1:27017/feelHome').then(result=>{
  console.log('mongo db connected');
}).catch(err=>{
  console.log(err);
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

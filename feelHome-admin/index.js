import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import userRouter from './Routes/UserRoute.js';
import adminRouter from './Routes/AdminRoute.js';
import hostRouter from './Routes/HostRoute.js';
import chatRouter from './Routes/ChatRoute.js';
import jwt from 'jsonwebtoken'
import { Server } from 'socket.io';
import messageRoute from './Routes/messageRoute.js';

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
app.use('/chat',chatRouter)
app.use('/message',messageRoute)


mongoose.connect('mongodb://127.0.0.1:27017/feelHome').then(result=>{
  console.log('mongo db connected');
}).catch(err=>{
  console.log(err);
});



// Start the server
const server=app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const io=new Server(server,{
  pingTimeout:60000,
  cors:{
    origin:["http://localhost:4000"],
    methods:['GET','POST','PATCH']
  }
})

io.on("connection",(socket)=>{
  console.log("conncted to socket.io");
  socket.on('setup',(userId)=>{
    socket.join(userId)
    socket.emit("connected")
  })
})
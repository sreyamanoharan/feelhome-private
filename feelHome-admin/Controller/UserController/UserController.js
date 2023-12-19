import { generateToken } from '../../middlewares/auth.js';
import userCollection from '../../Models/UserModel.js';
const SALT = process.env.SALT;
const EMAIL_PASS = process.env.EMAIL_PASS;

import nodemailer from 'nodemailer';
import sha256 from 'sha256';
const FRONTENDURL =   'http://localhost:4000/'
import {ObjectId} from 'mongoose';  


// SALT.config();

export const sendVerifyMail = async ( name,email,userId) => {
     try {
        console.log("hello000000000000000000000000000000000000",email)
        const transporter = nodemailer.createTransport({
                         host: 'smtp.gmail.com',
                         port: 465,
                         secure: true,
                         auth: {
                         user: 'feelhomewebsite@gmail.com',
                         pass: EMAIL_PASS,
      },
    });

   const expirationTime = new Date();
   expirationTime.setMinutes(expirationTime.getMinutes() + 1); 
   const expirationToken = encodeURIComponent(expirationTime.toISOString());
  

  const mailOptions = {
   
      from: 'feelhomewebsite@gmail.com',
      to: email,
      subject: 'email verification',
      html: `<p>Hii ${name}, please click <a href="${FRONTENDURL}verifyMail/${userId}?name=${name}&email=${email}&expires=${expirationToken}"
      >here</a> to verify your email.</p>`,
      
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Email has been sent', info.response);
      }
    });
  } catch (err) {
    console.error(err.message);
    console.log('Email cannot be sent');
  }
};

  export const verifyMail = async (req, res) => {
  
    try {
      
      const expirationToken = req.query.expires;
      const expirationTime = new Date(expirationToken);
     if (expirationTime > new Date()) {
    
      const { userId } = req.params;
      console.log("fbsmfbsmvsmfvsm");
      console.log(expirationTime,'kkkkkkkkkkkk');
      await userCollection.updateOne({ _id: userId }, { $set: { isVerified: true } });
      res.status(200).json({ message: 'Email verified successfully'});
     }
      else {
        res.status(400).json({errmsg:'email expired, send mail again'})
     
       }
       

    } catch (error) {
      console.error(error.message);
      next(error);
    }
  } 

export const resendMail=async (req,res)=>{

  try {
    
    const { userId } = req.body;
    const user = await userCollection.findOne({ _id: userId });
      console.log('you are hereeeeeeee bbbbb', userId,user);
      if(user){
        sendVerifyMail(user.name,user.email,userId)
        res.status(200).json({ message: 'Verification email has been resent.' });
      }else res.status(402).json({ errMsg: 'user not fount.' });
    
  } catch (error) {
    console.log(error)
  }
}  


export const ClientRegister = async (req, res) => {
  try {
    let { name, email, PhoneNumber, password } = req.body;
    console.log(req.body);
    email = email.trim();
    password = password.trim();

    const user = await userCollection.findOne({ $or: [{ email }, { PhoneNumber }] });
    
    if (user && !user.password) {
       return res.status(409).json({ message: 'User already exists, try Google login' });
    } else if (user) {
      return res.status(409).json({ message : 'User already exists' });
    } else {
      const newUser = await userCollection.create({
        name,
        email,
        PhoneNumber,
        password: sha256(password + SALT),
      });
      sendVerifyMail(newUser.name, newUser.email, newUser._id)
      res.status(201).json({ message: 'User registered successfully ,Check your mail for verification' });
    }


  } catch (error) {
    console.error('Error while registering user:', error);
    next(error);
  }
};

export const login = async (req, res) => {
  try {
  
    let { email, password, reMail } = req.body;
 
    const user = await userCollection.findOne({
      $and: [{ email }, { password: sha256(password + SALT) }],
    });
 
    if (!user) {
   
      res.status(400).json({ errmsg: "Password and email is incorrect" });
    } else if (user.isBlocked) {
    
      res.status(403).json({ errmsg: "Account is blocked by admin" });
    } else if (user && reMail) {
    
      sendVerifyMail(user.name,user.email,user._id);
    } else if (!user.isVerified) {
    
      res.status(401).json({ errmsg: "Verify your mail" });
    } else {
   
      const token=generateToken(user._id,'user')
      res.status(200) .json({
          message: "user successfully login",
          name: user.name,
          userId: user._id,
          token,
          role:'user'
        });
    }
  } catch (error) {
    res.status(500).json({ errmsg: "server error" });
    console.log(error)
  }
};
export const loadProfile = async (req, res) => {
  try {
    const userId = req.payload.id
    const user = await userCollection.findOne({ _id: userId })
  
   
    return res.status(200).json({ user })
  } catch (err) {
    return res.status(500).json({ errmsg: "Server error" })
  }
}

export const editProfile = async (req, res) => {
  try {
    console.log('edit your profile .........');
    let { name, profileImage, PhoneNumber } = req.body;
    console.log(req.body);
    name = name.trim();
    await userCollection.updateOne({ _id: req.payload.id }, { $set: { name, profileImage, PhoneNumber } });
    return res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    return res.status(500).json({ errmsg: "Server Error" });
  }
};


export const users=async(req,res)=>{
  try {
    let {userId}=req.params
    console.log(userId,'9999999999999999999999999999');
    const users=await userCollection.findById(userId)
   console.log(users);
    return res.status(200).json({users})
  } catch (error) {
    console.log(error);
  }
 
}





export default {
  ClientRegister,
  sendVerifyMail,
  verifyMail,
  login,
  resendMail
};

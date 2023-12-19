import { generateToken } from '../../middlewares/auth.js';
import adminCollection from '../../Models/AdminModel.js'
export const adminlogin = async (req, res) => {
    try {
    
      const { email, password } = req.body;
      console.log(req.body,"hxfhxfgefefefefefefefef");
   
      const admin = await adminCollection.findOne({
        $and: [{ email : email }, { password: password  }],
      });
   
     
     
        const token=generateToken(admin,'admin')
        res.status(200) .json({
            message: "admin successfully login",
            name: admin.name,
            adminId: admin._id,
            token,
            role:'admin'
          });
      
    } 
    catch (error) {
      res.status(500).json({ errmsg: "server error" });
      console.log(error)
    }
  };

  
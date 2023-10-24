import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    PhoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    ConfirmPassword:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
});

const User = mongoose.model('User', UserSchema);

export default User;

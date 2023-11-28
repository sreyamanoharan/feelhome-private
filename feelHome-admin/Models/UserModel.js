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
    },
    wallet: {
        type: Number,
        default: 0,
    },
    walletHistory: [{
        date: {
            type: Date,
            default: Date.now(),
        },
        amount: {
            type: Number,
            default: 0,
        },
        from: {
            type: mongoose.Schema.Types.ObjectId,   
            ref: 'User'
        },
        transactionType: {
            type: String,
            enum: ['Credit', 'Debit'],
        }
    }]

});

const User = mongoose.model('User', UserSchema);

export default User;

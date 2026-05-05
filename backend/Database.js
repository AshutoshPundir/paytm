const mongoose = require('mongoose');
const { number } = require('zod');

mongoose.connect('mongodb+srv://pundirashu2491_db_user:AYEZpk6uI3pgLtmY@clustor0.kkw7opi.mongodb.net/Paytm');

// const AdminSchema = mongoose.Schema({
//     username: String,
//     password: String
// });

const UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    password: String,
});

const BankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    balance:{   
        type: Number,
        required: true
    }
})

const User = mongoose.model('User',UserSchema);
const Account = mongoose.model('Account',BankSchema)

module.exports = {
    User,Account
}
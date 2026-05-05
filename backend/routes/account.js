const express = require('express');
const { Account, User } = require('../Database');
const { authMiddleware } = require('../middleware');
const zod = require('zod');
const mongoose = require('mongoose');


const router = express.Router();

router.get('/balance',authMiddleware, async function(req, res) {
    const account = await Account.findOne({
        userId: req.userId
        
    })
    if(!account) {
        return res.status(400).json({
            message:'Account not found'
        })
    }
    res.json({
        message:'Your account balance is: ',
        balance: account.balance
    })
})


router.post('/transfer', authMiddleware, async function(req, res){
    
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to, amount} = req.body;
    
    // Extract the actual ID in case 'to' is an object
    const receiverId = typeof to === 'object' ? to.id : to;
    
    console.log("Sender ID:", req.userId);
    console.log("Receiver ID:", receiverId);
    console.log("Amount:", amount);
    
    const account = await Account.findOne({userId:req.userId}).session(session);
    
    if(!account) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account"
        })
    }
    if(account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid amount"
        })
    }
    
    const toAccount = await Account.findOne({userId:receiverId}).session(session);
    
    console.log("Receiver Account Found:", toAccount);
    
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account of receiver"
        })
    }
    
    
    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:receiverId},{$inc:{balance:amount}}).session(session);
    
    await session.commitTransaction();
    await session.endSession();
    res.json({
        message:"Transaction successful"
    })
      
    
})




module.exports = router;


// router.post('/transfer',authMiddleware,async function(req, res){
    
//     const {to, amount} = req.body;
//     const account = await Account.findOne({
//         userId: req.userId
//     })
    
//     if(amount > Account.balance){
//         return res.status(400).json({
//             message:"insufficient balance"
//         })
//     }
//     const toAccount = await Account.findOne({
//         userId: to
//     })
//     if(!toAccount){
//         return res.status(400).json({
//             message: "invalid account"
//         })
//     }

//     await Account.updateOne(
//         {
//             userId: req.userId
//         },{
//             $inc:{
//                 balance: -amount
//             }
//         }

//     )

//     await Account.updateOne({
//         userId: to
//     },{
//         $inc:{
//             balance: amount
//         }
//     })

//     res.status(200).json({
//         message:"Transaction successful"
//     })
// })
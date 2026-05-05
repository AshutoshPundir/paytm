const express = require('express');
// const zod = require('../zod');
const zod = require('zod');
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config');
// const validateInput = require('../zod');
const { User, Account } = require('../Database');
const mongoose = require('mongoose');
const { authMiddleware } = require('../middleware');
const router = express.Router();

console.log("hello");


router.post('/signup',async (req, res) => {
    
    const signupBody = zod.object({
        username: zod.string().email(),
        firstName: zod.string(),
        lastName: zod.string(),
        password: zod.string()
    })
    console.log("hello");
    
    const body = req.body;
    const inputVerify = await signupBody.safeParse(body);
    
    if(!inputVerify.success){
        return res.status(411).json({
            message: "invalid input "
        })
    }
    
    const existingUser = await User.findOne({
        username:body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: "user already exists."
        })
    }
    
    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })
    
    // account create
    
    const accounts = await Account.create({
        userId: user._id,
        balance: 1 + Math.random() * 10000
    })
    
    const userId = user._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);
    
    return res.status(200).json({
        message: "user created successfully" + accounts.balance,
        token: token
    })
    
})


router.post('/signin', async(req, res) =>{
    const signinBody = zod.object({
        username: zod.string().email(),
        password: zod.string(),
    })
    const body = req.body;
    const signinInputverify = signinBody.safeParse(body)
    
    if(!signinInputverify.success){
        return res.status(411).json({
            message: "Invalid Input"
        })
    }
    
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(user){
        const userId = user._id;
        const token = jwt.sign({
            userId
        },JWT_SECRET);
        
        return res.status(200).json({
            message:"user logged in",
            token: token
        });
    }
    
    res.status(411).json({
        message: "Error while logging in.."
    })
    
})


router.put('/', async function (req, res) {
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"error while updating.."
        })
    }
    
    await User.UpdateOne(
        {_id:req.userId},
        req.body
    )
    
    res.json({
        message: "update successfully"
    })
})

router.get('/bulk', async function(req, res) {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or : [
            {
                firstName:{
                    '$regex': filter
                }
            },
            {
                lastName:{
                    '$regex': filter
                }
            }
        ]
    })
    
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;
// router.post('/signin',async function(res, req){
    //     const username = req.body.username;
    //     const password = req.body.password;
    
    //     const verifySignin = validateInput({username,password});
    
    //     const UserSearch = await User.find({username,password});
    
    //     if(!UserSearch.success || !verifySignin.success){
        //         return res.send(411).json({
            //             message:"Error while logging in"
            //         })
            //     } else {
                //         const userId = user._id;
                //         const token = jwt.sign({userId},JWT_SECRET);
                //         return res.send(200).json({
                    //             message: "logged in",
                    //         })
                    //     }
                    
                    
                    
                    
                    
                    
                    // router.post('/signup',async function(res, req) {
                    //     // try{
                            
                    //     // }  catch(e){
                    //     //     message: "error" + e
                    //     // }
                    //         const username = req.body.username;
                    //         const firstName = req.body.firstName;
                    //     const lastName = req.body.lastName;
                    //     const password = req.body.password;
                        
                    //     const validInput = validateInput.safeParse({username},{firstName},{lastName},{password});
                        
                    //     if(!validInput.success || User.findOne({username:username})){
                    //         return res.send(411).json({
                    //             message: "Email already taken / Incorrect inputs"
                    //         })
                    //     } 
                        
                    //     else {
                    //         const user = await User.create({
                    //             username: req.body.username,
                    //             firstName: firstName,
                    //             lastName: lastName,
                    //             password: password
                    //         })
                    //         const userId = user._id;
                    //         const token = jwt.sign({userId},JWT_SECRET);
                            
                    //         return res.send(200).json(
                    //             {
                    //                 message: "User created successfully",
                    //                 token: token,
                    //             }
                    //         )
                    //     }
                    // })
                    // })
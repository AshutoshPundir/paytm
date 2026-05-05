const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");


function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({})
    }

    const token = authHeader.split(' ')[1];
    try{
        console.log("helloo");
        const decoded = jwt.verify(token,JWT_SECRET);  
        
        if(decoded){
            req.userId = decoded.userId;  
        }
    } catch(e) {
        return res.status(403).json({
            message:"token failed" + e
        })
    }
    
    next();

    // try{

        // if(token){
        //     const decoded = jwt.verify(token,JWT_SECRET);
        // } else {
        //     console.log("token is undefined");
        // }
        // if(decoded){
        //     req.userId = decoded.userId
        // }
    // }catch(e){
    //         res.status(404).json({
    //             message:"token failed " + e  
    //         })
    // }
}

module.exports = {
    authMiddleware
}
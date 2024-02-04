const User=require("../models/User.model")



exports.store=async(req,res)=>{
    try{
        const payload=req.body;
        const user=await User.create(payload)
       res.json({status:200,success:true,message:"User created Successfully",user})
    
    }
    catch(err){
        console.log(err)
    }
   }

   exports.index=async(req,res)=>{
    try{
        const users=await User.find()
        res.json({status:201,success:true,message:"User fetched Successfully",users})
    
    }
    catch(err){
        console.log(err)
    }
   }
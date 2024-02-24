const User=require("../models/User.model")
const bcrypt=require("bcryptjs")



exports.store=async(req,res)=>{
    try{
        const payload=req.body;
        const salt=10;
        const hashpassword=await bcrypt.hash(payload.password,salt)
      payload.password=hashpassword;
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

   exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findOne({_id:id})
        res.json({status:201,success:true,message:"User fetched Successfully",user})
    
    }
    catch(err){
        console.log(err)
    }
   }

   exports.destroy=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findOneAndDelete({_id:id})
        if(!user){
            return res.json({message:"User not found"})
        }
        res.json({status:201,success:true,message:"User deleted Successfully"})
    
    }
    catch(err){
        console.log(err)
    }
   }

   exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findOneAndUpdate({_id:id},req.body,{new:true})
        if(!user){
            return res.json({message:"User not found"})
        }
        res.json({status:201,success:true,message:"User updated Successfully",user})
    
    }
    catch(err){
        console.log(err)
    }
   }
   
   

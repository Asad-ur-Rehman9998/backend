const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    }

})

module.exports=mongoose.model("user",userSchema)
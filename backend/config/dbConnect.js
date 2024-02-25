const mongoose=require("mongoose")

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://arslan:Arslanakmal786@crud.izdbdth.mongodb.net/batch18")
        console.log("MongoDb Connected Successfully")
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports=connectDb
const express=require("express")
const app=express();
const PORT=8082;
const connectDb=require("./config/dbConnect")
const adminRoute=require("./routes/index")
var cors = require('cors')


connectDb();
app.use(cors())
app.use(express.json())
app.use("/api/admin",adminRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})






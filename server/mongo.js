//
// mongodb+srv://asim:asim123@cluster0.s0lemet.mongodb.net/cars?retryWrites=true&w=majority
const mongoose=require("mongoose")
mongoose.connect( "mongodb://127.0.0.1:27017/cars").then(()=>{
    console.log("connected DB")
})
.catch(()=>{
    console.log("failed DB")
})

const newSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =mongoose.model("collection",newSchema)   //model is a key word use to defin coll

module.exports=collection
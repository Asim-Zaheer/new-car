const express = require("express")
// const mongoose = require("mongoose")
const collection =require("./mongo")
const cors= require ("cors")
const work=express()
work.use(express.json())
work.use(express.urlencoded({extended:true}))
work.use(cors())

// const collection = require("./models/Collection")
// mongoose.connect("mongodb://localhost://127.0.0.1:27017/cars")

work.get("/",cors(),(req,res)=>{

})

work.post("/",async(req,res)=>{
    const{email,password}=req.body


    try{
        const check =await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }

})

work.post("/signup",async(req,res)=>{
    const{email,password}=req.body
        const data ={

            email:email,
            password:password
        }

    

    try{
        const check =await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data]) 
        }
    }
    catch(e){
        res.json("fail")
    }

})
work.listen(4000,()=>{
    console.log("PORT Connected")
})
const express=require("express");
const dotenv=require("dotenv");
const app=express();

const collection=require("./userschema");
const connectDB=require("./mongo");
const cors=require("cors");
app.use(express.json());
app.use(cors())
dotenv.config();
connectDB();
app.get("/",(req,res)=>{
    res.send("Api started brooo....");
})

app.get("/",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    console.log("Server 21");
    try{
        const check=await collection.findOne({email:email})
        console.log("Server 24");
        if(check){
            console.log("Server 26");
            res.json("exist")
        }
        else{
            console.log("Server 30");
            res.json("not exist")
        }
        console.log("Server 33");
    }
    catch(e){
        res.json("user doesn't exist")
    }
})

app.post("/register",async(req,res)=>{
    const {email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("nonexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("user doesn't exist")
    }
})
app.listen(5000,console.log("server started on port 5000...."));

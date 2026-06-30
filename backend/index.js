const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users.js')
const dns =require('dns')
require('dotenv').config();


dns.setServers(["1.1.1.1","8.8.8.8"])

const app=express()
app.use(cors())
app.use(express.json())

const port=process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`server running on port ${port}...`)
})

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("MongoDB Connected...");
})
.catch((err) => {
  console.error("MongoDB Error:", err);
});

app.get('/',(req,res)=>{
  UserModel.find({})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
  const id=req.params.id;
  UserModel.findById({_id:id})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))

})

app.delete('/deleteUser/:id',(req,res)=>{
  const id=req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.put('/UpdateUser/:id',(req,res)=>{
  const id=req.params.id;
  UserModel.findByIdAndUpdate({_id:id},{ name:req.body.name, email:req.body.email, age:req.body.age })
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})

app.post("/AddUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err =>res.json({err,success:false}))
})


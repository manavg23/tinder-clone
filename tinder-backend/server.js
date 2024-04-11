import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCards.js';
import cors from 'cors'



//1es8PBGxSiSRj5ec
//mongodb+srv://tinderadmin:PVBYCATNLrKSNrp5@cluster0.bhxcizp.mongodb.net/?retryWrites=true&w=majority
//App Config
const app = express();
const port = process.env.PORT || 5000;
//dbconfig
const connection_url = "mongodb+srv://manavg23:test123@mernapp.agewybl.mongodb.net/?retryWrites=true&w=majority&appName=MernAPP";

mongoose.connect(connection_url,
    { useNewUrlParser: true, useUnifiedTopology: true },
console.log("Connected to MongoDB"));

//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=> res.status(200).send("hello"))

app.post('/tinder/card', (req,res)=>{
    const dbCard= req.body;
Cards.create(dbCard , (err,data)=>{
    if(err){
        res.status(500).send(err)
    }else
    {
        res.status(201).send(data)
    }
})


})
app.get('/tinder/card', (req,res)=>{
    
Cards.find((err,data)=>{
    if(err){
        res.status(500).send(err)
    }else
    {
        res.status(201).send(data)
    }
})


});


app.listen(port ,()=>console.log("listening"))
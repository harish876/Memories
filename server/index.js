import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRoutes from './Routes/posts.js'
import 'dotenv/config';

var app=express();
const PORT=process.env.PORT||5000;

//middleware
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
//have cors before this routes file
app.use('/posts',postsRoutes);
app.get('/',(req,res)=>{
    res.send("APP IS RUNNING...");
})

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Listening on ${PORT}...`);
    })
}).catch((err)=>{
    console.log(err.message);
});

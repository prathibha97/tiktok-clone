import express from "express";
import mongoose from "mongoose";
import Data from './data.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

// mongoose config
const connection_url =
  "mongodb+srv://admin:Rmpp213097@cluster0.cresq.mongodb.net/tiktok?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// middleware
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})


// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

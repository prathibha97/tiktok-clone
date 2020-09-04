import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;

// mongoose config
const connection_url =
  "mongodb+srv://admin:<password>@cluster0.cresq.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

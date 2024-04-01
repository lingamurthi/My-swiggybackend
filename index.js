require("dotenv").config();
const express= require('express')
const app=express()
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const cardRoutes = require("./routes/card");
const menuRoutes = require("./routes/menu");
//DB Connection
mongoose
  .connect(process.env.DATABASE, {
  
  })
  .then(() => {
    console.log("DB CONNECTED");
  });



  app.use(bodyParser.json());
  app.use(cors())


  app.use("/api", cardRoutes);
  app.use("/api", menuRoutes);

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
})
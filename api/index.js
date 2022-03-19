const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mangoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected sccsfly")).catch((err)=>console.log(err));

app.listen(3500, () => {
  console.log("port 3500 alive");
});

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mangoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected sccsfly"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(3500, () => {
  console.log("port 3500 alive");
});

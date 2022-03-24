const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mangoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected sccsfly"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(3500, () => {
  console.log("port 3500 alive");
});

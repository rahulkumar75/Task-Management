//Importing Node Libraries
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const taskRouter = require("./routes/taskRoutes");

//Setting Configuration File Path
dotenv.config({
  path: "./config.env",
});

const app = express();
app.use(cors());

//Connecting Mongo Database
mongoose
  .connect(process.env.DB_LOCAL)
  .then((conn) => {
    console.log("DB Connection Successful");
  })
  .catch((err) => console.log(err));

//Running Server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Server Running On Port " + port);
});

app.use(express.json());
app.use("/tmsapi/task", taskRouter);

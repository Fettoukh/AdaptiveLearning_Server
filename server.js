const express = require("express");
const app = express();
const focusRouter = require("./routes/focus");
const mouseRouter = require("./routes/mouse");
const mongoose = require("mongoose");
const Focus = require("./models/focus");
var cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(cors());

const connection_url = `mongodb://${process.env.mongoDBLogin}:${process.env.mongoDBPassword}@cluster0-shard-00-00.erw3c.mongodb.net:27017,cluster0-shard-00-01.erw3c.mongodb.net:27017,cluster0-shard-00-02.erw3c.mongodb.net:27017/adaptiveLearning?ssl=true&replicaSet=atlas-cydxmw-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", async (req, res) => {
  const focus = await Focus.find().sort({
    createdAt: "desc",
  });
  res.status(200).json(focus);
});

app.use("/focus", focusRouter);
app.use("/mouse", mouseRouter);

app.listen(5000);

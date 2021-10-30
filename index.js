const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlRoute = require("./routes/url");

const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/url", urlRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err.message);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running on ${PORT}`);
});

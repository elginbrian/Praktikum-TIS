require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const bookRoutes = require("./routes/book.route");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Elgin Brian Wahyu Bramadhika, 235150701111031",
  });
});

app.use("/books", bookRoutes);

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("connected", () => {
  console.log("Mongo connected");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

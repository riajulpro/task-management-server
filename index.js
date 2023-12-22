const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB Connection process.env.MONGODB_URI
mongoose
  .connect("mongodb://localhost/taskManagement")
  .then(() => console.log("Database successfully connected!"))
  .catch((error) => console.log(error));

const taskRoute = require("./src/routes/taskRoute");

app.use("/tasks", taskRoute);

app.get("/", (req, res) => {
  res.send("The Server of Task management is running successfully...");
});

app.listen(port, () => {
  console.log(`Task Management app listening on port ${port}`);
});

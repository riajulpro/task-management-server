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
    origin: ["http://localhost:5173", "https://rp-task-manage.surge.sh", "https://658595e038826ad10726a099--tranquil-nasturtium-713f69.netlify.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB Connection process.env.MONGODB_URI
mongoose
  .connect(process.env.MONGODB_URI)
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

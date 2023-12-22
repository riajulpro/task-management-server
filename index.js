const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("The Server of Task management is running successfully...");
});

app.listen(port, () => {
  console.log(`Task Management app listening on port ${port}`);
});

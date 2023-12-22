const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    default: function () {
      // Set the default value to the current date/time in GMT +6
      const currentDate = new Date();
      const utcOffset = 6 * 60; // GMT +6 in minutes
      const gmtPlus6Date = new Date(currentDate.getTime() + utcOffset * 60000);
      return gmtPlus6Date;
    },
  },
  priority: {
    type: String,
    default: "low",
  },
  status: {
    type: String,
    default: "todo",
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;

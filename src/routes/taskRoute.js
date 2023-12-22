const express = require("express");
const router = express.Router();

const Task = require("../models/taskModel.js");

// GET ALL DATA
router.get("/", async (req, res) => {
  try {
    // const email = req.query.email;
    // const query = { createdBy: email };

    const data = await Task.find();

    res.status(200).json({
      data,
      message: "Search result successfully retrieved",
    });
  } catch (error) {
    res.status(500).json({
      error: "There was a server error!",
    });
  }
});

// POST ONE
router.post("/", async (req, res) => {
  try {
    const newPost = new Task(req.body);
    await newPost.save();

    res.status(200).json({
      message: "Task successfully added",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error!",
    });
  }
});

// PUT ONE: UPDATE
router.put("/:id", async (req, res) => {
  try {
    await Task.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).json({
      message: "Task successfully updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "There was a server error!",
    });
  }
});

// DELETE ONE
router.delete("/:id", async (req, res) => {
  try {
    const result = await Task.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 1) {
      // Document was deleted successfully
      res.status(200).json({
        message: "Task successfully deleted",
      });
    } else {
      // Document with the given ID was not found
      res.status(404).json({
        error: "Document not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "There was a server error!",
    });
  }
});

module.exports = router;

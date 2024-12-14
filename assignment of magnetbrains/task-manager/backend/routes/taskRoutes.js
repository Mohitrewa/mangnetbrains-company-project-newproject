const express = require("express");
const { createTask, getTasks } = require("../controllers/taskController");

const router = express.Router();

router.route("/").post(createTask).get(getTasks); // Create and Get tasks

module.exports = router;

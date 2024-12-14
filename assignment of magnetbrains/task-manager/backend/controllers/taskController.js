const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;
    try {
        const task = new Task({
            title,
            description,
            dueDate,
            priority,
            user: req.user._id
        });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all tasks for a user
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

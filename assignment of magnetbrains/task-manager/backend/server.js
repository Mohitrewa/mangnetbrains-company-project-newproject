const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const { authenticate } = require("./middleware/authMiddleware");

dotenv.config();

const app = express();
app.use(express.json()); // To parse JSON body
app.use(cors()); // Allow cross-origin requests

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", authenticate, taskRoutes); // Authenticate for task routes

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Database connection error:", err);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

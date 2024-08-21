const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/taskDB.json");
let db = require(dbPath);

const checkTask = (req, res, next) => {
  const taskId = req.params.id;
  const task = db.tasks.find((t) => t.id == taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found. Check ID Here." });
  }

  next(); // If validation passes, proceed to the next middleware or route handler
};

module.exports = checkTask;

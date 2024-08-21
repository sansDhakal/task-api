const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/taskDB.json");
let db = require(dbPath);

const saveToDb = () => {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

exports.getAllTasks = (req, res) => {
  res.status(200).json(db.tasks);
};

exports.getTaskById = (req, res) => {
  const task = db.tasks.find((t) => t.id == req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.getTaskByStatus = (req, res) => {
  const status = req.params.status.toLowerCase();
  const tasks = db.tasks.filter((t) => t.status.toLowerCase() === status);
  if (tasks.length > 0) {
    res.status(200).json(tasks);
  } else {
    res.status(404).json({
      message: "No tasks found with the given status. Try a different status.",
    });
  }
};

exports.createTask = (req, res) => {
  const { name, status, description } = req.body;

  const newTask = {
    id: db.tasks.length + 1,
    name,
    status,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  db.tasks.push(newTask);
  saveToDb();

  res
    .status(201)
    .json({ message: "Task created successfully!", task: newTask });
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { name, status, description } = req.body;

  const task = db.tasks.find((t) => t.id == id);

  task.name = name;
  task.status = status;
  task.description = description;
  task.updatedAt = new Date().toISOString();

  saveToDb();
  res.status(200).json({ message: "Task updated successfully!", task: task });
};

exports.patchTask = (req, res) => {
  const { id } = req.params;
  const { name, status, description } = req.body;

  const task = db.tasks.find((t) => t.id == id);

  task.name = name;
  task.status = status;
  task.description = description;
  task.updatedAt = new Date().toISOString();

  saveToDb();
  res.status(200).json({ message: "Task updated successfully!", task: task });
};

exports.deleteTask = (req, res) => {
  db.tasks = db.tasks.filter((t) => t.id != req.params.id);
  saveToDb();
  res.status(204).end();
};

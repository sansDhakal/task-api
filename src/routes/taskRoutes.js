const express = require("express");
const router = express.Router();
const validateTaskInput = require("../middleware/validateTaskInput");
const taskController = require("../taskControllers/taskController");
const checkTask = require("../middleware/checkTask");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.get("/status/:status", taskController.getTaskByStatus);
router.post("/", validateTaskInput, taskController.createTask);
router.put("/:id", checkTask, validateTaskInput, taskController.updateTask);
router.delete("/:id", checkTask, taskController.deleteTask);
router.patch("/:id", checkTask, validateTaskInput, taskController.patchTask);
module.exports = router;

const express = require("express");
const router = express.Router();

const taskController = require("./../controller/taskController");

router
  .route("/")
  .get(taskController.getAllTask)
  .post(taskController.createTask);
router
  .route("/:id")
  .get(taskController.getTaskById)
  .patch(taskController.updateTaskById)
  .delete(taskController.deleteTaskById);

router.route("/:id/:mark").patch(taskController.completeTaskById);

module.exports = router;

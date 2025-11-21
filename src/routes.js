import express from "express";
import TaskController from "../controllers/taskController.js";

class Routes {
  constructor() {
    this.router = express.Router();
    this.setupRouter();
  }
  setupRouter() {
    this.router.post("/", TaskController.createTask.bind(TaskController));
    this.router.get("/", TaskController.getAllTasks.bind(TaskController))
    this.router.get("/:id", TaskController.getTaskById.bind(TaskController))
    this.router.put("/:id", TaskController.updateTask.bind(TaskController))
    this.router.delete("/:id", TaskController.deleteTask.bind(TaskController))
    this.router.patch("/:id/toggle", TaskController.toggleUpdate.bind(TaskController))
  }
}
export default new Routes().router;

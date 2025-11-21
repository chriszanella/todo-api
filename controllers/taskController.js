import Task from "../models/Task.js";

class TaskController {
  async createTask(req, res) {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async getAllTasks(req, res) {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Tarefa nao encontrada" });
    }
  }
  async getTaskById(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa nao encontrada" });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateTask(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!task) {
        return res.status(404).json({ error: "Tarefa nao encontrada" });
      }
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id)
      if (!task) {
        return res.status(404).json({ error: "Tarefa nao encontrada" })
      }
      res.json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  async toggleUpdate(req, res) {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa nao encontrada" })
      }
      task.completed = !task.completed
      await task.save()
      res.json(task)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new TaskController();

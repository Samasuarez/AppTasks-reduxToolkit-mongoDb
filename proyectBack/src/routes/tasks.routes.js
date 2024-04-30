import { Router } from "express";
import {
  createTask,
  getTasksById,
  putTasksById,
  getTasksList,
  deleteTasks
} from "../controllers/tasks.controler.js";

const routerTask = Router();

routerTask.get("/", getTasksList);
routerTask.get("/:id", getTasksById);
routerTask.post("/", createTask);
routerTask.put("/:id", putTasksById);
routerTask.delete('/:id', deleteTasks)

export default routerTask;

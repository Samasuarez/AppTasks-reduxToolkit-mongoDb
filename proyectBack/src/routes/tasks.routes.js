import { Router } from "express";
import {
  createTask,
  getTasksById,
  putTasksById,
  getTasksList,
} from "../controllers/tasks.controler.js";

const routerTask = Router();

routerTask.get("/", getTasksList);
routerTask.get("/:id", getTasksById);
routerTask.post("/", createTask);
routerTask.put("/:id", putTasksById);

export default routerTask;

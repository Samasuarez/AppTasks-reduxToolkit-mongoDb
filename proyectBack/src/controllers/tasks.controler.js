import taskModel from "../models/task.model.js";

export const getTasksList = async (req, res) => {
  try {
    const tasks = await taskModel.find({});

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTasksById = async (req, res) => {
  const { id } = req.params;
  try {
    const taskId = await taskModel.findById(id);
    res.status(200).send(taskId);
  } catch (error) {
    res
      .status(400)
      .send({ error: `error producto ${response} no encontrado ` });
  }
};

export const createTask = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const succes = await taskModel.create({
      title,
      description,
      category,
    });
    res.status(200).send(succes);
  } catch (error) {
    res.status(400).json('error');
  }
};

export const putTasksById = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  try {
    const modifTask = await taskModel.findByIdAndUpdate(id, {
      title,
      description,
      category,
    });
    res.status(200).send(modifTask);
  } catch (error) {
    res.status(500).json(`error${error}`);
  }
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  try {
    const succes = await taskModel.findByIdAndDelete(id);
    res.status(200).send({ resultado: "OK", task: succes });
  } catch (error) {
    res.status(400).json(`error when deleting `);
  }
};


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskSlice.js";
import './styles.css'

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, category }),
      });

      if (!response.ok) {
        throw new Error("Error al agregar la tarea");
      }

      const data = await response.json();

      dispatch(addTask(data));

      setTitle("");
      setDescription("");
      setCategory("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="form-button">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;

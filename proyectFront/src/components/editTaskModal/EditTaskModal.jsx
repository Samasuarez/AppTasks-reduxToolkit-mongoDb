import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../redux/taskSlice.js";
import { closeEditModal } from "../../redux/modalSlice.js";
import "./styles.css";

const EditTaskModal = ({ taskId }) => {
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task._id === taskId)
  );
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:2000/api/tasks/${taskId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedTask),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      dispatch(editTask({ taskId, updatedTask: editedTask }));
      dispatch(closeEditModal());
    } catch (error) {
      console.error("Error updating task:", error.message);
    }
  };

  const handleCancel = () => {
    dispatch(closeEditModal());
  };

  return (
    <div className="edit-task-modal-container">
      <input
        className="edit-task-modal-input"
        type="text"
        name="title"
        value={editedTask.title || ""}
        onChange={handleChange}
      />
      <textarea
        className="edit-task-modal-textarea"
        name="description"
        value={editedTask.description || ""}
        onChange={handleChange}
      />
      <button className="edit-task-modal-button" onClick={handleSubmit}>
        Guardar
      </button>
      <button className="edit-task-modal-button" onClick={handleCancel}>
        Cancelar
      </button>
    </div>
  );
};

export default EditTaskModal;

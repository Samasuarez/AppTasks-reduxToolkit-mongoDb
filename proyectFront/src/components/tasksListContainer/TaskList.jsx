import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks, deleteTask } from "../../redux/taskSlice.js";
import { openEditModal, closeEditModal } from "../../redux/modalSlice.js";
import EditTaskModal from "../editTaskModal/EditTaskModal.jsx";
import "./styles.css";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const isEditModalOpen = useSelector((state) => state.modal.isEditModalOpen);
  const editModalTaskId = useSelector((state) => state.modal.editModalTaskId);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/tasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await response.json();
        dispatch(setTasks(data));
      } catch (error) {
        console.error("Error fetching tasks:", error.message);
      }
    };

    fetchTasks();
  }, [dispatch]);

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(
        `http://localhost:2000/api/tasks/${taskId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      dispatch(deleteTask(taskId));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  const handleEdit = (taskId) => {
    dispatch(openEditModal(taskId));
  };

  const handleCloseModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <div className="task-cardContainer">
            <strong>Title:</strong> {task.title}
          </div>
          <div>
            <strong>Description:</strong> {task.description}
          </div>
          <div>
            <strong>Category:</strong> {task.category}
          </div>
          <div className="task-buttons">
            <button
              className="task-button delete-button"
              onClick={() => handleDelete(task._id)}
            >
              Delete
            </button>
            <button
              className="task-button edit-button"
              onClick={() => handleEdit(task._id)}
            >
              Edit
            </button>
          </div>
        </div>
      ))}

      {isEditModalOpen && (
        <EditTaskModal taskId={editModalTaskId} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TaskList;

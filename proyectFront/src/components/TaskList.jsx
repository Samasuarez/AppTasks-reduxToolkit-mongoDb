import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "../redux/taskSlice.js";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

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

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <div>Title: {task.title}</div>
            <div>Description: {task.description}</div>
            <div>Category: {task.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

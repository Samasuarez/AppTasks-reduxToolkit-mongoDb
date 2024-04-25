import { useSelector } from "react-redux";
import "./App.css";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <div className="App">
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App;

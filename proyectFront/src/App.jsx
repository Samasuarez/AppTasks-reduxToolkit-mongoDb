import { useSelector } from "react-redux";
import TaskList from "./components/tasksListContainer/TaskList.jsx"
import TaskForm from "./components/tasksFormContainer/TaskForm.jsx";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  // console.log(tasksState);
  const tasksStateModal = useSelector((state) => state.modal)
// console.log(tasksStateModal)
  return (
    <div className="App">
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App;

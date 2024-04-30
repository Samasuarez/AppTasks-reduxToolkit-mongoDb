import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },

    editTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const index = state.tasks.findIndex((task) => task._id === taskId);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updatedTask };
      }
    },
  },
});

export const { addTask, setTasks, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;

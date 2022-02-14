import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ITodoState {
  todos: ITodoItem[];
  isLoaded: boolean;
}
export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (page: number = 1) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=20&_page=${page}`
    );
    return response.data;
  }
);

const initialState: ITodoState = { todos: [], isLoaded: false };

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((i) => {
        return i.id !== payload;
      });
    },
    toggleCompleted: (state, { payload }) => {
      const el = state.todos.find((i) => i.id === payload);
      if (el) el.completed = !el.completed;
    },
    editTodo: (state, { payload }) => {
      const el = state.todos.find((i) => i.id === payload.id);
      if (el) el.title = payload.title;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoaded = true;
    });
  },
});

export const { addTodo, removeTodo, toggleCompleted, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

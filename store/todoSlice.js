import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        todo: action.payload.todo,
        isPrioritize: false,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    todoPrioritized(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.isPrioritize = !todo.isPrioritize;
    },
    todoRemoved(state, action) {
      state.splice(
        state.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
    todoEditted(state, action) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.todo = action.payload.todo;
        todo.isPrioritize = action.payload.isPrioritize;
        todo.completed = action.payload.completed;
      }
    },
  },
});

export const {
  todoAdded,
  todoToggled,
  todoPrioritized,
  todoRemoved,
  todoEditted,
} = todosSlice.actions;
export default todosSlice.reducer;

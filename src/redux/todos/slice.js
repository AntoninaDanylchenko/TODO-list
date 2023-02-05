import { addTodo, fetchTodos, deleteTodo, toggleCompleted } from './operations';
import { statusFilters } from './constants';
import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
    status: statusFilters.all,
  },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: handlePending,

    [fetchTodos.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.todos = action.payload;
      console.log(state);
    },
    [fetchTodos.rejected]: handleRejected,
    [addTodo.pending]: handlePending,
    [addTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.todos.push(action.payload);
    },
    [addTodo.rejected]: handleRejected,
    [deleteTodo.pending]: handlePending,
    [deleteTodo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.todos.findIndex(
        task => task.id === action.payload.id
      );
      state.todos.splice(index, 1);
    },
    [deleteTodo.rejected]: handleRejected,
    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.todos.findIndex(
        task => task.id === action.payload.id
      );
      state.todos.splice(index, 1, action.payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  },
});

export const { setStatusFilter } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

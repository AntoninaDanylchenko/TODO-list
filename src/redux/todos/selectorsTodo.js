import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectTodos = state => state.todos.todos;

export const selectIsLoading = state => state.todos.isLoading;
export const selectError = state => state.todos.error;
export const selectStatusFilter = state => state.todos.status;

export const selectVisibleTodos = createSelector(
  [selectTodos, selectStatusFilter],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTodos], todos => {
  return todos.reduce(
    (count, todo) => {
      if (todo.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});

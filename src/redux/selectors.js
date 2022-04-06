import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filters.search;

export const statusFilterSelector = (state) => state.filters.status;

export const priorityFilterSelector = (state) => state.filters.priority;

export const todosRemainingSelector = createSelector(
  todoListSelector, 
  searchTextSelector, 
  statusFilterSelector,
  priorityFilterSelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        if (priority.length) {
          return todo.name.toLowerCase().includes(searchText.toLowerCase()) && priority.includes(todo.priority);
        }
        else {
          return todo.name.toLowerCase().includes(searchText.toLowerCase());
        }
      }
      else if (status === 'Completed') {
        if (priority.length) {
          return todo.name.toLowerCase().includes(searchText.toLowerCase()) && priority.includes(todo.priority) && todo.completed;
        }
        else {
          return todo.name.toLowerCase().includes(searchText.toLowerCase()) && todo.completed;
        }
      }
      if (priority.length) {
          return todo.name.toLowerCase().includes(searchText.toLowerCase()) && priority.includes(todo.priority)  && !todo.completed;
      }
      return todo.name.toLowerCase().includes(searchText.toLowerCase()) && !todo.completed;
    }
  )}
)
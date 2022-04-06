import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn ReactJS', completed: true, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: false, priority: 'High'},
    { id: 3, name: 'Learn Angular', completed: false, priority: 'Low'},
  ],
  reducers: {
    addTodo: (state, action) => {
      return state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentToto = state.find(todo => todo.id === action.payload);
      currentToto.completed = !currentToto.completed;
    }
  }
});
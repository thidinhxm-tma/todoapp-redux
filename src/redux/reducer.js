const initialState = {
  filters: {
    search: '',
    status: 'all',
    priority: [],
  },
  todoList: [
    { id: 1, name: 'Learn ReactJS', completed: true, priority: 'Medium' },
    { id: 2, name: 'Learn Redux', completed: false, priority: 'High'},
    { id: 3, name: 'Learn Angular', completed: false, priority: 'Low'},
  ]
  
}


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ]
      }
    default:
      return state
      
  }
}

export default rootReducer;
const initialState = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ],
};

const todoReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'MARK_COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = ! todo.completed
          }
          return todo
        })
      }
  
    default:
      return state
  }
}


export default todoReducer
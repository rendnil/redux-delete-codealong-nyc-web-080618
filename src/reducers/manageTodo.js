export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };

    case "DELETE_TODO":
      let newTodos = state.todos.filter((todo)=>{
        return todo !== action.payload
      })
      return {todos: newTodos}

    default:
      return state;
  }
}

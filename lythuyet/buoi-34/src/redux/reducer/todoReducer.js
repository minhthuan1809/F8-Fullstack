const initialState = {
  todoList: [],
  status: "pending",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/update":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todo/todoUpdate":
      return { ...state, todoList: [...state.todoList, action.payload] };

    default:
      return state;
  }
};

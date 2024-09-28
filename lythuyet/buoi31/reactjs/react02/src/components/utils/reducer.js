export const reducer = (state, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }

    default:
      return state;
  }
};

export const initialState = {
  TodoList: ["item 1", "item 2", "item 3"],
};

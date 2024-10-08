const initialState = {
  count: 0,
};
export const connterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/increment":
      return { ...state, count: state.count + 1 };
    case "count/decrement":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

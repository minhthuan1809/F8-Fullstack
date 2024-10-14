const initialState = {
  data: [],
  loading: false,
};
export const trelloReduce = (state = initialState, action) => {
  switch (action.type) {
    case "trello/render":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

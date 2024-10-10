const initialState = {
  products: [],
  loading: false,
};

export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "details/loading":
      return {
        ...state,
        loading: action.loading,
      };

    case "details/product":
      return {
        ...state,
        products: [action.payload],
        loading: false,
      };

    default:
      return state;
  }
};

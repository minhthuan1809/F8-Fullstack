const initialState = {
  products: [],
  loading: false,
  totalPage: 0,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "products/loading":
      return {
        ...state,
        loading: action.loading,
      };
    case "products/render":
      return {
        ...state,
        products: action.payload,
        loading: true,
        totalPage: action.totalPage,
      };

    default:
      return state;
  }
};

export default ProductReducer;

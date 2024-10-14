const initialState = JSON.parse(localStorage.getItem("apikey")) || {
  apikey: null,
  status: false,
};

export const loginReduce = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "login/apikey":
      const save = {
        ...state,
        apikey: action.payload,
        status: true,
      };
      localStorage.setItem("apikey", JSON.stringify(save));
      return save;

    case "logout":
      localStorage.removeItem("apikey");
      return {
        apikey: null,
        status: false,
      };

    default:
      return state;
  }
};

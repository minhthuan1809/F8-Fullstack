/* eslint-disable no-unused-vars */
import { useContext, useReducer } from "react";
import { ProviderContex } from "./StateProvider";
import { initialState } from "./reducer";

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContex);
  return dispatch;
};
export const useSeletor = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("lỗi");
  }
  const { state } = useContext(ProviderContex);

  return callback(state);
};

export const useReducerWithMiddleware = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchMiddleware = (action) => {
    const stort = {
      getState: () => state,
      dispatch,
    };
    const MiddlewareFn = middleware(stort);
    if (typeof MiddlewareFn !== "function") {
      throw new Error("Middleware is not a function");
    }
    MiddlewareFn(action);
    // dispatch(action);
  };
  return [state, dispatchMiddleware];
};

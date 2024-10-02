/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useReducer } from "react";
import { initialState, rootReducer } from "./reducer";
import { useReducerWithMiddleware } from "./Hook";
import { middleware } from "./middlewares/middlewares";
export const ProviderContex = createContext();
export default function StateProvider({ children }) {
  //   const [state, dispatch] = useReducer(rootReducer, initialState);
  const [state, dispatch] = useReducerWithMiddleware(
    rootReducer,
    initialState,
    middleware
  );

  return (
    <ProviderContex.Provider value={{ state, dispatch }}>
      {children}
    </ProviderContex.Provider>
  );
}

// chứa State của toàn bộ dự án

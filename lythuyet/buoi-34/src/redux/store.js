import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { connterReducer } from "./reducer/reducer";
import { loggerMiddlewares } from "./middlewares/loggerMiddlewares";
import { thunk } from "redux-thunk";
import { todoReducer } from "./reducer/todoReducer";
export const rootReducer = combineReducers({
  // keyreducer : reducerFunction,
  counter: connterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(loggerMiddlewares, thunk))
);

console.log(store);

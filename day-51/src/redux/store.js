import { createStore, combineReducers } from "redux";
import { loginReduce } from "./reducer/login";
import { trelloReduce } from "./reducer/trello";

const rootReducer = combineReducers({
  login: loginReduce,
  trello: trelloReduce,
});

const store = createStore(rootReducer);

export default store;

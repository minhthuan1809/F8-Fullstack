import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import ProductReducer from "./reducer/productReducer";
import { cartReducer } from "./reducer/cartReducer";
import { detailsReducer } from "./reducer/detailsProducts";

const rootReducer = combineReducers({
  products: ProductReducer,
  carts: cartReducer,
  details: detailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

console.log(store);
export default store;

// import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./reducers/shop";
import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

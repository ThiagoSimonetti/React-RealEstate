import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      homes: Reducer,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};

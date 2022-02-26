import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      homes: Reducer,
      ...createForms({
        feedbackForm: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};

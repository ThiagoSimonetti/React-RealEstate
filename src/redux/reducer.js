import { HOMES } from "../shared/homes";

export const initialState = {
  homes: HOMES,
};

console.log("initialState", initialState);

export const Reducer = (state = initialState, action) => {
  return state;
};

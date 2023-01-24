import { combineReducers } from "redux";
import { NewsReducer } from "./NewsReducer";

const reducer = combineReducers({
  news: NewsReducer,
});

export default reducer;

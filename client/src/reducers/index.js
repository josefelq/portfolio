import { combineReducers } from "redux";

import languageReducer from "./languageReducer";
import pathReducer from "./pathReducer";

export default combineReducers({
  language: languageReducer,
  path: pathReducer
});

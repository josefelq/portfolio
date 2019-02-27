import { combineReducers } from "redux";

import languageReducer from "./languageReducer";
import pathReducer from "./pathReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  language: languageReducer,
  path: pathReducer,
  state: tagReducer
});

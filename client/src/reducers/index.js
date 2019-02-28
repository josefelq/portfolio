import { combineReducers } from "redux";

import languageReducer from "./languageReducer";
import pathReducer from "./pathReducer";
import tagReducer from "./tagReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  language: languageReducer,
  path: pathReducer,
  state: tagReducer,
  form: formReducer
});

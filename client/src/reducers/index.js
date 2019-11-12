import { combineReducers } from "redux";

import languageReducer from "./languageReducer";
import tagReducer from "./tagReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  language: languageReducer,
  state: tagReducer,
  form: formReducer
});

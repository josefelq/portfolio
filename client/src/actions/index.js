import { CHANGE_LANGUAGE } from "./types";

export const changeLanguage = () => dispatch => {
  dispatch({ type: CHANGE_LANGUAGE, payload: true });
};

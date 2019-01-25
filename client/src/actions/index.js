import { CHANGE_LANGUAGE, CHANGE_PATH } from "./types";

export const changeLanguage = () => dispatch => {
  dispatch({ type: CHANGE_LANGUAGE, payload: true });
};
export const changePath = path => dispatch => {
  dispatch({ type: CHANGE_PATH, payload: path });
};

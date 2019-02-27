import { CHANGE_LANGUAGE, CHANGE_PATH, CHANGE_TAGS } from "./types";

export const changeLanguage = () => dispatch => {
  dispatch({ type: CHANGE_LANGUAGE, payload: true });
};
export const changePath = path => dispatch => {
  dispatch({ type: CHANGE_PATH, payload: path });
};
export const changeTags = (tag, render) => dispatch => {
  render();
  dispatch({ type: CHANGE_TAGS, payload: tag });
};

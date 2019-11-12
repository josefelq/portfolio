import { CHANGE_LANGUAGE, CHANGE_TAGS } from "./types";

export const changeLanguage = () => dispatch => {
  dispatch({ type: CHANGE_LANGUAGE, payload: true });
};

export const changeTags = (tag, render) => dispatch => {
  render();
  dispatch({ type: CHANGE_TAGS, payload: tag });
};

import { CHANGE_PATH } from "../actions/types";

export default function(state = "/", action) {
  switch (action.type) {
    case CHANGE_PATH:
      return action.payload;
    default:
      return state;
  }
}

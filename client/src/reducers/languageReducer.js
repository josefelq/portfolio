import { CHANGE_LANGUAGE } from "../actions/types";

export default function(state = "es", action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      if (state === "en") {
        return "es";
      } else {
        return "en";
      }
    default:
      return state;
  }
}

import { CHANGE_TAGS } from "../actions/types";
import { PROJECTS } from "../translations/projects";

export default function(state = { tags: [], projects: PROJECTS }, action) {
  switch (action.type) {
    case CHANGE_TAGS:
      let newTags = state.tags;
      let tag = action.payload;
      if (newTags.includes(tag)) {
        newTags = newTags.filter(el => el !== tag);
      } else {
        newTags.push(tag);
      }

      let newProjects = [];

      if (!newTags.length) {
        newProjects = PROJECTS;
      } else {
        PROJECTS.forEach(proj => {
          let hasTag = true;
          newTags.forEach(tag => {
            if (!proj.tags.includes(tag)) {
              hasTag = false;
            }
          });
          if (hasTag) {
            newProjects.push(proj);
          }
        });
      }

      return { tags: newTags, projects: newProjects };
    default:
      return state;
  }
}

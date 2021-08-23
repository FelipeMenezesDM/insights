import { http } from "./config";

export default {
  searchTags: (query) => {
    return http.get('tag/search', {params: {s: query}});
  },
  get: (tagName) => {
    return http.get('tag/get', {params: {name: tagName}});
  }
};
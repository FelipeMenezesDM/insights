import { http } from "./config";

export default {
    searchTags: (query) => {
        return http.get('tag/search', {params: {s: query}});
    }
};
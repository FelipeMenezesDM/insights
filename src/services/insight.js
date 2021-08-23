import { http } from "./config";

const handlerTags = async (insight) => {
  if(!insight.tags || !insight.tags.length) {
    insight.tags = [];
    return;
  }
  
  for(const tag in insight.tags) {
    if(!insight.tags[tag].name && typeof insight.tags[tag] != 'object') {
      insight.tags[tag] = {name: insight.tags[tag]};
    }
  }
};

export default {
  list: (params) => {
    return http.get('insight/list', {params: params});
  },
  post: (insight) => {
    handlerTags(insight);
    return http.post('insight/post', insight);
  },
  put: (insight) => {
    handlerTags(insight);
    return http.post('insight/put', insight);
  },
  getInfo: (params) => {
    return http.get('insight/get', {params: params});
  },
  delete: (params) => {
    return http.delete('insight/delete', {params: params});
  },
  search: (params, source) => {
    const parameters = {params: params};

    if(source) {
      parameters.cancelToken = source.token;
    }

    return http.get('insight/search', parameters);
  }
};
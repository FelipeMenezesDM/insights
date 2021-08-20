import { http } from "./config";

const handlerTags = (insight) => {
  if(!insight.tags || !insight.tags.length) {
    insight.tags = null;
    return;
  }

  insight.tags.map(tag => {
    if(!tag.name && typeof tag != 'object') {
      return {
        name: tag
      }
    }

    return tag;
  });
};

export default {
  list: () => {
    return http.get('insight/list');
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
  }
};
import BaseService from "./_base-service";

class PostService extends BaseService {
  getPosts(params) {
    return this.get("/posts", params);
  }
}

export default new PostService();

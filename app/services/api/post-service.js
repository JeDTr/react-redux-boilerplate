import BaseService from "./_base-service";

class PostService extends BaseService {
  getPosts() {
    return this.get("/posts");
  }
}

export default new PostService();

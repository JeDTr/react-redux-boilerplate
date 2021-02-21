import BaseService from "./_base-service";

class AuthService extends BaseService {
  login(data) {
    return this.post("/login", data);
  }
}

export default new AuthService();

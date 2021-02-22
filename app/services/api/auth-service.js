import BaseService from "./_base-service";

class AuthService extends BaseService {
  login(data) {
    return this.post("/login", data);
  }

  getProfile() {
    return this.get("/profile");
  }
}

export default new AuthService();

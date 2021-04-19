import { makeAutoObservable, flow } from "mobx";

import AuthService from "@/services/api/auth-service";
import { setTokens } from "@/utils/auth";

class AuthStore {
  profile = null;
  isLoading = false;
  errors = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = flow(function* () {
    this.isLoading = true;

    try {
      const profile = yield AuthService.getProfile();
      this.profile = profile;
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    } finally {
      this.isLoading = false;
    }
  });

  login = flow(function* (data) {
    // this.isLoading = true;

    try {
      const tokens = yield AuthService.login(data);
      this.errors = null;
      setTokens(tokens);
      yield this.fetchProfile();
      return Promise.resolve();
    } catch (error) {
      this.errors = error;
      return Promise.reject();
    } finally {
      // this.isLoading = false;
    }
  });
}

export default AuthStore;

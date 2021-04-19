import AuthStore from "./auth-store";

class RootStore {
  constructor() {
    this.authStore = new AuthStore();
  }
}

export default RootStore;

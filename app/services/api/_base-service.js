import axios from "@/utils/axios";

export default class BaseService {
  constructor(instance = axios) {
    this.instance = instance;
  }

  get(...args) {
    return this.execute("get", ...args);
  }

  post(...args) {
    return this.execute("post", ...args);
  }

  put(...args) {
    return this.execute("put", ...args);
  }

  async execute(method, ...args) {
    try {
      const response = await this.instance[method](...args);
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
}

// original version: https://gist.github.com/Godofbrowser/bf118322301af3fc334437c683887c5f
import axiosBase from "axios";

import { getTokens, setTokens } from "@/utils/auth";

const axios = axiosBase.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
});

axios.defaults.headers.access_token = getTokens().access_token;

// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.access_token = token;
            return axios(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      isRefreshing = true;

      const { refresh_token } = getTokens();
      return new Promise((resolve, reject) => {
        axios
          .post("/refresh_token", { refresh_token })
          .then(({ data }) => {
            setTokens(data);
            axios.defaults.headers.access_token = data.access_token;
            originalRequest.headers.access_token = data.access_token;
            processQueue(null, data.access_token);
            resolve(axios(originalRequest));
          })
          .catch((err) => {
            processQueue(err, null);
            reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      });
    }

    return Promise.reject(error);
  },
);

export default axios;

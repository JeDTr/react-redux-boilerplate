import { storageKeys } from "./constants";
import storage from "./storage";

export const getTokens = () => ({
  access_token: storage.get(storageKeys.ACCESS_TOKEN),
  refresh_token: storage.get(storageKeys.REFRESH_TOKEN),
});

export const hasTokens = () => {
  const { access_token, refresh_token } = getTokens();

  return Boolean(access_token && refresh_token);
};

export const setTokens = ({ access_token, refresh_token }) => {
  if (access_token) storage.set(storageKeys.ACCESS_TOKEN, access_token);

  if (refresh_token) storage.set(storageKeys.REFRESH_TOKEN, refresh_token);
};

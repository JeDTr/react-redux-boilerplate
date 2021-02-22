const set = (key, value) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const get = (key) => {
  const value = localStorage.getItem(key);

  if (value) return JSON.parse(value);

  return undefined;
};

const remove = (key) => localStorage.removeItem(key);

const clear = () => localStorage.clear();

export default {
  set,
  get,
  remove,
  clear,
};

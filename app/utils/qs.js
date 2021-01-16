import _qs from "qs";

const qs = {};

qs.parse = (string, options) =>
  _qs.parse(string, { ignoreQueryPrefix: true, ...options });

qs.stringify = (string, options) =>
  _qs.stringify(string, { addQueryPrefix: true, ...options });

export default qs;

import axios from "axios";

axios.interceptors.response.use(null, err => {
  const expected =
    err.response && err.response.status >= 400 && err.response.status < 500;
  if (!expected) alert("An unexpected error occured");
  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

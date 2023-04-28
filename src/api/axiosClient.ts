import axios from "axios";

const BASE_URL = "https://nal.tmmumbai.in/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";
  // req.headers.authorization = 'SECRET_TOKEN';
  // req.headers.id = 'UNIQUE_ID'
  return req;
});

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    //you can have custom user frindly errors
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

export { axiosInstance };

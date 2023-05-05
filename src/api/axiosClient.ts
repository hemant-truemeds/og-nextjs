import axios from "axios";

export enum Base_URLS {
  BASE_URL = "https://nal.tmmumbai.in/",
  WP_ARTICLES = "https://article.truemedsblog.in/",
}

const axiosBase = axios.create({
  baseURL: Base_URLS.BASE_URL,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosBase.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";
  // req.headers.authorization = 'SECRET_TOKEN';
  // req.headers.id = 'UNIQUE_ID'
  return req;
});

axiosBase.interceptors.response.use(
  (res) => res,
  (err) => {
    //you can have custom user frindly errors
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

// wordpress axios client
const axiosWp = axios.create({
  baseURL: Base_URLS.WP_ARTICLES,
  timeout: 8000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosWp.interceptors.request.use((req) => {
  req.headers["Content-Type"] = "application/json";
  // req.headers.authorization = 'SECRET_TOKEN';
  // req.headers.id = 'UNIQUE_ID'
  return req;
});

axiosWp.interceptors.response.use(
  (res) => res,
  (err) => {
    //you can have custom user frindly errors
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

export { axiosBase, axiosWp };
